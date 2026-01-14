// Types for dynamic form fields
export type FieldOption = {
  label: string;
  value: string | number;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
};

export type Field = {
  id: string;
  name?: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "month" | "number" | "time" | "textarea" | "select" | "checkboxes";
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  inputmode?: string;
  datalistId?: string;
  rows?: number;
  options?: FieldOption[];
  colSpan?: string;
  row?: number;
  step?: number | string;
  min?: string;
  max?: string;
  autocomplete?: string;
  addClass?: string;
};

export type FormData = {
  id: string;
  method?: string;
  action?: string;
  redirection: string;
  campaign: string;
  fields: Field[];
  submitBtnText?: string;
};