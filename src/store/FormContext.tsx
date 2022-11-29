import React, { useState } from "react";

import { getImageURL } from "../utils/helpers";
import { FORM_INPUTS } from "../utils/constants";

interface InputValues {
  [key: string]: string;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;

export type Version = "stable" | "beta";
export type Theme = "light" | "dark";
export type DeliveryMethod = "email" | "slack";
export type Alert =
  | "tasks"
  | "appointments"
  | "notes"
  | "leads"
  | "candidates"
  | "contacts"
  | "companies"
  | "submissions";

type ContextData = {
  onChangeInputValue: (e: InputChangeEvent) => void;
  onChangeSelectValue: (e: SelectChangeEvent) => void;
  onChangeDeliveryMethods: (value: DeliveryMethod) => void;
  onChangeAlertTypes: (value: Alert) => void;
  onToggleTheme: () => void;
  onToggleVersion: () => void;
  onChangeAvatarImage: (e: InputChangeEvent) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValues: InputValues;
  alertTypes: Alert[];
  deliveryMethods: DeliveryMethod[];
  theme: Theme;
  version: Version;
  saving: boolean;
  avatarImage: string;
};

const API_URL = import.meta.env.VITE_API_URL || "";

const defaultInputValues: InputValues = {};
FORM_INPUTS.forEach(({ nameAndId }) => {
  defaultInputValues[nameAndId] = "";
});

// @ts-ignore
export const FormContext = React.createContext<ContextData>({});

const DEFAULT_AVATAR_IMAGE =
  "https://images.prestigeonline.com/wp-content/uploads/sites/5/2021/08/02225014/Featured-image-45-e1627916138365.png";

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValues, setInputValues] =
    useState<InputValues>(defaultInputValues);
  const [alertTypes, setAlertTypes] = useState<Alert[]>([]);
  const [deliveryMethods, setDeliveryMethods] = useState<DeliveryMethod[]>([]);
  const [theme, setTheme] = useState<Theme>("light");
  const [version, setVersion] = useState<Version>("stable");
  const [avatarImage, setAvatarImage] = useState<string>(DEFAULT_AVATAR_IMAGE);
  const [saving, setSaving] = useState(false);

  const handleChangeInputValue = (e: InputChangeEvent) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [`${name}`]: value });
  };

  const handleChangeSelectValue = (e: SelectChangeEvent) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [`${name}`]: value });
  };

  const handleChangeAlertTypes = (value: Alert) => {
    let alertsCopy = [...alertTypes];

    if (alertsCopy.includes(value)) {
      // It's already in alertTypes array, so we need to remove it
      const valIndex = alertsCopy.findIndex((alert) => alert === value);
      if (valIndex !== -1) {
        alertsCopy.splice(valIndex, 1);
        setAlertTypes(alertsCopy);
      }
    } else {
      // Not in array yet.  Add it
      alertsCopy.push(value);
      setAlertTypes(alertsCopy);
    }
  };

  const handleChangeDeliveryMethods = (value: DeliveryMethod) => {
    // same logic as handleChangeAlertTypes above, but for deliveryMethods
    let deliveryMethodsCopy = [...deliveryMethods];

    if (deliveryMethodsCopy.includes(value)) {
      const valIndex = deliveryMethodsCopy.findIndex(
        (alert) => alert === value
      );
      if (valIndex !== -1) {
        deliveryMethodsCopy.splice(valIndex, 1);
        setDeliveryMethods(deliveryMethodsCopy);
      }
    } else {
      deliveryMethodsCopy.push(value);
      setDeliveryMethods(deliveryMethodsCopy);
    }
  };

  const handleChangeAvatarImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files); // Convert FileList to Array
    const imageUrl = await getImageURL(files[0]);

    if (imageUrl) {
      setAvatarImage(imageUrl);
    }
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleToggleVersion = () => {
    setVersion((prev) => (prev === "beta" ? "stable" : "beta"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true); // causes loading indicator to show up under submit button.

    const formData = {
      ...inputValues,
      theme,
      version,
      alertTypes,
      deliveryMethods,
    };
    console.log("FORM DATA:", formData);
    console.log("STRING DATA:", JSON.stringify(formData));

    /*  Validation should happen here.  I typically write a separate function that receives formData, validates
        each field based on whatever the validation rules are, then either returns true or
        an object where each key is the field that had an error and each key's value would be the error message
        to show under that input.

        Assuming all validation is passed, we can submit it.  
        Keys in the formData object would probably need to be changed to match what the api expects. 
    */

    try {
      // I typically use axios, but I'm pretty sure this is right using fetch.
      // Adding a library for a single api call seems like overkill
      const rawResponse = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const response = await rawResponse.json();
      // Could trigger some kind of success/error toast here depending on response
    } catch (e) {
      console.log("ERROR:", e);
    }

    // setTimeout is just to simulate "awaiting" the response.
    // Remove it if you replace VITE_API_URL in .env with a working URL.
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <FormContext.Provider
      value={{
        inputValues,
        onChangeInputValue: handleChangeInputValue,
        onChangeSelectValue: handleChangeSelectValue,
        onChangeDeliveryMethods: handleChangeDeliveryMethods,
        onChangeAlertTypes: handleChangeAlertTypes,
        onToggleTheme: handleToggleTheme,
        onToggleVersion: handleToggleVersion,
        onChangeAvatarImage: handleChangeAvatarImage,
        onSubmit: handleSubmit,
        theme,
        version,
        deliveryMethods,
        alertTypes,
        saving,
        avatarImage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
