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
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  inputmode?: string;
  datalistId?: string;
  rows?: number;
  options?: FieldOption[];
  colSpan?: number;
  row?: number;
  step?: number | string;
  min?: string;
  max?: string;
  autocomplete?: string;
};