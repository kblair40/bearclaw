import { formatNameAndId } from "./helpers";

type InputType = "text" | "password" | "tel" | "email";
type Option = { label: string; value: string; [key: string]: string };

export type InputObject = {
  [key: string]: string | InputType | undefined | Option[];
  label: string;
  type?: InputType;
  nameAndId: string;
  options?: Option[];
};

// nameAndId field will be used to give the input it's id and name
export const FORM_INPUTS: InputObject[] = [
  {
    label: "First Name",
    type: "text",
    nameAndId: formatNameAndId("First Name"),
  },
  {
    label: "Last Name",
    type: "text",
    nameAndId: formatNameAndId("Last Name"),
  },
  {
    label: "Title",
    type: "text",
    nameAndId: formatNameAndId("Title"),
  },
  {
    label: "Role",
    type: "text",
    nameAndId: formatNameAndId("Role"),
  },
  {
    label: "Email",
    type: "email",
    nameAndId: formatNameAndId("Email"),
  },
  {
    label: "Phone",
    type: "tel",
    nameAndId: formatNameAndId("Phone"),
  },
  {
    label: "Password",
    type: "password",
    nameAndId: formatNameAndId("Password"),
  },
  {
    label: "Default Note Action",
    nameAndId: formatNameAndId("Default Note Action"),
    options: [
      { label: "Touchpoint", value: "touchpoint" },
      { label: "Reply", value: "reply" },
      { label: "Email", value: "email" },
    ],
  },
  {
    label: "Default Landing Page upon Login",
    nameAndId: formatNameAndId("Default Landing Page upon Login"),
    options: [
      { label: "Recruiting Dashboard", value: "recruiting_dashboard" },
      { label: "Sales Dashboard", value: "sales_dashboard" },
    ],
  },
];
