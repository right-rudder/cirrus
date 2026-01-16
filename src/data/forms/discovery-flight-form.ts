import type { FormData } from "../../components/utils/types";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER } from "../consts";

const formData: FormData = {
  id: "discovery-flight-form",
  redirection: "/discovery-flight-confirmation",
  campaign: "discovery_flight",
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
      id: "flight_date",
      label: "Preferred Discovery Flight date",
      type: "date",
      required: true,
      dataSetMinDate: 1,
    },
    {
      id: "flight_time",
      label: "Preferred Discovery Flight time",
      type: "select",
      required: true,
      options: [
        {
          value: "",
          label: "",
        },
        {
          value: "Morning",
          label: "Morning",
        },
        {
          value: "Early afternoon",
          label: "Early afternoon",
        },
        {
          value: "Late afternoon",
          label: "Late afternoon",
        },
      ],
    },
    {
      id: "discovery-flight-sights",
      label: "What would you like to see in your Discovery Flight?",
      type: "checkboxes",
      required: true,
      options: [
        {
          value: "Siesta Key Beach coastline",
          label: "Siesta Key Beach coastline",
        },
        {
          value: "St. Armands Circle",
          label: "St. Armands Circle",
        },
        {
          value: "Longboat Key",
          label: "Longboat Key",
        },
        {
          value: "Other",
          label: "Other",
        },
      ],
      colSpan: "full",
      addClass: "sm:grid-cols-2",
    },
    {
      id: "additional-info",
      label: "Additional Information",
      placeholder: "Write your message here...",
      type: "textarea",
      colSpan: "full",
      rows: 6,
    },
  ],
};

export const data = {
  eyebrow: "Discovery Flight",
  heading: "Let's Plan Your Flight",
  subheading: "Prepare to take off, schedule your discovery flight and experience the joy of flying through the sky.",
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
