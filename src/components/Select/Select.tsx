import React from "react";

type Option = { label: string; value: string; [key: string]: string };

type Props = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  nameAndId: string;
  options: Option[];
};

const Select = ({ label, onChange, value, nameAndId, options }: Props) => {
  return (
    <div className="select">
      <label htmlFor={label}>{label}</label>
      <select onChange={onChange} value={value} id={nameAndId} name={nameAndId}>
        <option value="">Select an option</option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
