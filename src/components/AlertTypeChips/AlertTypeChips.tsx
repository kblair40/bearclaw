import { useContext } from "react";

import { type Alert, FormContext } from "../../store/FormContext";
import Chip from "../Chip";

const AlertTypeChips = () => {
  const { onChangeAlertTypes, alertTypes } = useContext(FormContext);

  const alerts: Alert[] = [
    "tasks",
    "appointments",
    "notes",
    "leads",
    "candidates",
    "contacts",
    "companies",
    "submissions",
  ];

  return (
    <div className="alert-chips">
      <p className="label">Alert Types</p>
      <div className="alert-chips__chips-container">
        {alerts.map((label, i) => {
          return (
            <Chip
              key={i}
              label={label}
              isSelected={alertTypes.includes(label)}
              onToggle={() => onChangeAlertTypes(label)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlertTypeChips;
