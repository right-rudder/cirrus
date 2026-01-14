import { COMPANY_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER } from "../consts";
import type { FormData } from "../../components/utils/types";

const formData: FormData = {
  id: "contact-us-form",
  redirection: "/contact-us-confirmation",
  campaign: "contact_us",
  fields: [
    {
      id: "first_name",
      label: "First Name",
      placeholder: "John",
      required: true,
      type: "text",
      autocomplete: "given-name",
    },
    {
      id: "last_name",
      label: "Last Name",
      placeholder: "Doe",
      required: true,
      type: "text",
      autocomplete: "family-name",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "example@yourmail.com",
      required: true,
      type: "email",
      inputmode: "email",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "+1 234 567 8910",
      required: true,
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
    },
    {
      id: "flight_training_goal",
      label: "What is your flight training goal?",
      required: true,
      type: "select",
      options: [
        {
          value: "",
          label: "",
        },
        {
          value: "Career",
          label: "Career",
        },
        {
          value: "Pleasure",
          label: "Pleasure",
        },
      ],
    },
    {
      id: "us_citizen",
      label: "Are you a US citizen?",
      required: true,
      type: "select",
      options: [
        {
          value: "",
          label: "",
        },
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ],
    },
    {
      id: "gi_bill",
      label: "Have you served in the US Military and want to use your G.I. Bill?",
      required: true,
      type: "select",
      colSpan: "full",
      options: [
        {
          value: "",
          label: "",
        },
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ],
    },
    {
      id: "message",
      label: "Message",
      required: true,
      placeholder: "Write your message here...",
      type: "textarea",
      colSpan: "full",
      rows: 6,
    },
  ],
};

export const contactData = {
  eyebrow: "Contact Us",
  heading: "Let's Plan Your Flight",
  subheading: `Contact ${COMPANY_NAME} today for expert guidance, program details, and professional advice to start your journey toward mastering the skies.`,
  info: {
    title: "Fill out this form and let's start flying",
    intro: "We're here to help you get started on your aviation journey, call us if you need anything.",
    locationLabel: "Our Location",
    addressLine1: ADDRESS_LINE_1,
    addressLine2: ADDRESS_LINE_2,
    phoneLabel: "Phone Number",
    phoneValue: PHONE_NUMBER,
  },
  form: formData,
};