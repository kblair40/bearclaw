import React from "react";

import { type Alert, type DeliveryMethod } from "../../store/FormContext";

type Props = {
  label: DeliveryMethod | Alert;
  isSelected: boolean;
  onToggle: (value: DeliveryMethod | Alert) => void;
  widthClass?: "w-25" | "w-50" | "w-75" | "w-100";
};

const Chip = ({ label, isSelected, onToggle, widthClass }: Props) => {
  let chipClass = "chip";
  if (isSelected) chipClass += " chip--selected";
  if (widthClass) chipClass += ` ${widthClass}`;

  const handleClick = (e: React.MouseEvent) => {
    onToggle(label);
  };

  return (
    <div className={chipClass} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Chip;
