import { SCHOOL_RANDOM_ID } from "astro:env/client";

function generatePortalPostBody(body: any, campaign: string) {
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

  portalBody.campaign = campaign;
  portalBody.account_random_id = SCHOOL_RANDOM_ID;
  portalBody.metadata = metadata;

  return portalBody;
}

function updateSubmitButtonState(button: any, enabled: boolean, text: string) {
  button.disabled = !enabled;

  if (text) {
    button.textContent = text;
  }
}

function normalizePhone(value: string) {
  if (!value) return "";

  const cleaned = value.replace(/(?!^\+)[^\d]/g, "");

  return cleaned === "+" ? "" : cleaned;
}

function checkFormValidity(form: any) {
  if (!form.checkValidity()) {
    return false;
  }

  const checkboxes: any = document.querySelectorAll(`#${form.id} fieldset:has(input[type="checkbox"])`);

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

export {generatePortalPostBody, updateSubmitButtonState, normalizePhone, checkFormValidity};