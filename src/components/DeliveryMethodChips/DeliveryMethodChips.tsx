import { useContext, Fragment } from "react";

import Chip from "../Chip";
import Stack from "../Stack";
import { FormContext, type DeliveryMethod } from "../../store/FormContext";

const DeliveryMethodChips = () => {
  const { deliveryMethods, onChangeDeliveryMethods } = useContext(FormContext);

  const contactRequiredMethod = (method: string) =>
    `${method} (contact us to enable this method)`;

  const availableMethods: DeliveryMethod[] = ["email", "slack"];

  return (
    <Fragment>
      <p className="label">Delivery Methods</p>
      <div className="delivery-method-chips">
        {availableMethods.map((method, i) => {
          return (
            <Chip
              key={i}
              label={method}
              isSelected={deliveryMethods.includes(method)}
              onToggle={() => onChangeDeliveryMethods(method)}
              widthClass="w-50"
            />
          );
        })}
      </div>

      <Stack>
        {["SMS", "MS Teams", "Zoom"].map((item, i) => (
          <p key={i} className="contact-required-method">
            {contactRequiredMethod(item)}
          </p>
        ))}
      </Stack>
    </Fragment>
  );
};

export default DeliveryMethodChips;
