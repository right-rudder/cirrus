import { COMPANY_NAME, COURSES, ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER } from "../consts";
import type { FormData } from "../../components/utils/types";

const programOptions = COURSES.map((item) => {
  return {
    value: item,
    label: item,
  }
});

const formData: FormData = {
  id: "enroll-form",
  redirection: "/enroll-confirmation",
  campaign: "enroll",
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
      id: "preferred_programs",
      label: "Preferred Programs",
      required: true,
      type: "checkboxes",
      options: programOptions,
      colSpan: "full",
      addClass: "md:grid-cols-2",
    },
    {
      id: "message",
      label: "Message",
      required: true,
      placeholder: "Anything else we need to know?",
      type: "textarea",
      colSpan: "full",
      rows: 6,
    },
  ],
};

export const data = {
  eyebrow: "Enroll",
  heading: "Let's Start Flying",
  subheading: `Enroll at ${COMPANY_NAME} today for clear instruction, consistent guidance and expertise developed from years of experience, all to help you start your journey toward mastering the skies.`,
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