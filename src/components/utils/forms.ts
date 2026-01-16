import type { FormData } from "./types";
import { PHONE_NUMBER } from "../../data/consts";
import { PORTAL_API_KEY, PORTAL_URL, SCHOOL_RANDOM_ID } from "astro:env/client";
import { formatDate } from "./utils";

export class Form {
  formData: FormData;
  webhookURL: string;
  form: any;
  submitBtn: any;
  acceptTerms: any;
  errorMsgContainer: any;
  cooldownSeconds: number;
  isSubmitting: boolean;

  constructor(formData: FormData, webhookURL: string) {
    this.formData = formData;
    this.webhookURL = webhookURL;
    this.cooldownSeconds = 10;
    this.isSubmitting = false;

    this.attachEvents();
  }

  setupFields() {
    this.form = document.getElementById(this.formData.id);
    this.submitBtn = document.getElementById(`${this.formData.id}-submitBtn`);
    this.acceptTerms = document.getElementById(`${this.formData.id}-agree_to_terms_and_conditions`);
    this.errorMsgContainer = document.getElementById(`${this.formData.id}-error-message`);

    this.checkVariables();

    const dateFields: any = document.querySelectorAll(`#${this.form.id} input[type="date"]`);

    dateFields.forEach((input: any) => {
      const hasMinDate = typeof input.dataset.minDate !== "undefined";
      const hasMaxDate = typeof input.dataset.maxDate !== "undefined";
      if (!(hasMinDate || hasMaxDate)) return;

      const minDate = new Date();
      const maxDate = new Date();

      if (hasMinDate) {
        /* How many days from the current date (0 means the current date is allowed) is the minimum allowed date */
        const datasetMinDate = Number.parseInt(input.dataset.minDate);

        minDate.setHours(0, 0, 0, 0);
        minDate.setDate(minDate.getDate() + datasetMinDate);

        input.min = `${minDate.toISOString().split('T')[0]}`;
      }
      
      if (hasMaxDate) {
        /* How many days from the current date (0 means the current date is allowed) is the maximum allowed date */
        const datasetMaxDate = Number.parseInt(input.dataset.maxDate);

        maxDate.setHours(12, 0, 0);
        maxDate.setDate(maxDate.getDate() + datasetMaxDate);

        input.max = `${maxDate.toISOString().split('T')[0]}`;
      }

      const bottomLabel = document.querySelector(`#${this.form.id} label[data-for="${input.id}"]`);
      if (bottomLabel) {
        bottomLabel.classList.add("mt-2");
        if (input.min && input.max) {
          bottomLabel.textContent = `The accepted dates are from ${formatDate(minDate)} to ${formatDate(maxDate)}.`;
        } else if (input.min) {
          bottomLabel.textContent = `The minimum accepted date is ${formatDate(minDate)}.`;
        } else if (input.max) {
          bottomLabel.textContent = `The maximum accepted date is ${formatDate(maxDate)}.`;
        }
      }
    });
  }

  attachEvents() {
    document.addEventListener("DOMContentLoaded", () => {
      this.setupFields();
      
      this.updateSubmitButtonState(this.checkFormValidity(), undefined);

      this.form.addEventListener("input", () => {
        this.updateSubmitButtonState(this.checkFormValidity(), undefined);
      });

      this.form.addEventListener("submit", this.submit.bind(this));
    });
  }

  checkVariables() {
    if (!this.webhookURL || !this.webhookURL.startsWith("https://")) {
      alert("Missing submission configuration (webhookURL).");
      return false;
    }

    if (!PORTAL_URL) {
      alert("Missing submission configuration (PORTAL_URL).");
      return false;
    }

    if (!PORTAL_API_KEY) {
      alert("Missing submission configuration (PORTAL_API_KEY).");
      return false;
    }

    if (!this.form) {
      alert("Form element not found.");
      return false;
    }

    if (!this.submitBtn) {
      alert("Submit button element not found.");
      return false;
    }

    if (!this.acceptTerms) {
      alert("Accept terms and conditions element not found.");
      return false;
    }

    return true;
  }

  checkFormValidity() {
    if (!this.form.checkValidity()) {
      return false;
    }

    const checkboxes: any = document.querySelectorAll(`#${this.form.id} fieldset:has(input[type="checkbox"])`);

    let numberOfInvalid = 0;

    checkboxes.forEach((item: any) => {
      if (!item.dataset.required) {
        return;
      }

      const numberOfSelected = item.querySelectorAll(`input[type="checkbox"]:checked`).length;

      if (numberOfSelected <= 0) {
        numberOfInvalid++;
      }
    });

    return numberOfInvalid <= 0;
  }

  updateSubmitButtonState(enabled: boolean, text: string | undefined) {
    this.submitBtn.disabled = !enabled;

    if (text) {
      this.submitBtn.textContent = text;
    }
  }

  generatePortalPostBody(body: any) {
    const portalBody = JSON.parse(JSON.stringify(body));

    const excludedFields = [
      "first_name",
      "last_name",
      "email",
      "phone",
      "confirm_email",
      "agree_to_terms_and_conditions",
    ];

    const metadata: any = {};

    for (const key in portalBody) {
      const value = portalBody[key];
      if (!excludedFields.includes(key)) {
        metadata[key] = value?.trim?.() ?? value;
      }
    }

    portalBody.campaign = this.formData.campaign;
    portalBody.account_random_id = SCHOOL_RANDOM_ID;
    portalBody.metadata = metadata;

    return portalBody;
  }

  showErrorMessage(msg: string) {
    this.errorMsgContainer.querySelector("p").textContent = msg;
    this.errorMsgContainer.style.maxHeight = `${this.errorMsgContainer.scrollHeight}px`;
  }

  hideErrorMessage() {
    this.errorMsgContainer.style.maxHeight = null;
  }

  async submit(event: any) {
    event.preventDefault();
    this.hideErrorMessage();

    if (this.isSubmitting) return;
    if (this.submitBtn.disabled) return;
    if (!this.checkVariables()) return;

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    if (data["confirm_email"]) return; // honeypot

    this.formData.fields.forEach((field) => {
      if (field.type !== "checkboxes") return;

      data[field.id] = formData.getAll(field.id).join(", ");
    });

    const portalBody = this.generatePortalPostBody(data);

    try {
      this.isSubmitting = true;
      this.updateSubmitButtonState(false, "Submitting...");

      const [crmResponse, portalResponse] = await Promise.all([
        fetch(this.webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        fetch(PORTAL_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": PORTAL_API_KEY,
          },
          body: JSON.stringify(portalBody),
        }),
      ]);

      if (crmResponse.ok && portalResponse.ok) {
        window.location.href = this.formData.redirection;
      } else {
        console.error("Submission failed", {
          crm: {
            status: crmResponse.status,
            body: await crmResponse.json(),
          },
          portal: {
            status: portalResponse.status,
            body: await portalResponse.json(),
          },
        });

        this.showErrorMessage(`The submission failed, please try again later.\nIf this error persists, contact us directly through ${PHONE_NUMBER}.`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      this.showErrorMessage("Network error, please try again later.");
    } finally {
      setTimeout(() => {
        this.isSubmitting = false;
        this.updateSubmitButtonState(true, this.formData.submitBtnText || "Submit");
      }, this.cooldownSeconds * 1000);
    }
  }
}
