import React from "react";

type Props = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type: string;
  nameAndId: string;
};

const Input = ({ label, nameAndId, onChange, value, type }: Props) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        id={nameAndId}
        name={nameAndId}
        type={type}
      />
    </div>
  );
};

export default Input;
