import { useContext } from "react";

import { FORM_INPUTS } from "../../utils/constants";
import { FormContext } from "../../store/FormContext";
import LinkedinConnection from "../LinkedInConnection";
import Avatar from "../Avatar";
import Switch from "../Switch";
import Stack from "../Stack";
import Select from "../Select";
import Input from "../Input";

const Form = () => {
  const { saving, theme, version, onToggleTheme, onToggleVersion, onSubmit } =
    useContext(FormContext);

  return (
    <form className="form" onSubmit={onSubmit}>
      <LinkedinConnection connectionActive={false} />

      <div className="form__row form__row--top">
        <Avatar />

        <div className="form__switches-and-submit">
          <div className="form__title-and-submit">
            <h1>Edit User</h1>
            <button type="submit">Submit Changes</button>

            {saving && <p>Saving...</p>}
          </div>

          <div className="form__switches">
            <Switch
              isChecked={theme === "dark"}
              id="theme"
              labelOff="Light"
              labelOn="DARK"
              onToggle={onToggleTheme}
            />
            <Switch
              isChecked={version === "beta"}
              id="release-version"
              labelOff="STABLE"
              labelOn="BETA"
              onToggle={onToggleVersion}
            />
          </div>
        </div>
      </div>

      <div className="form__row form__row--bottom">
        <InputColumn colNumber={1} />
        <InputColumn colNumber={2} />

        <div className="form__input-column"></div>
      </div>
    </form>
  );
};

export default Form;

const COLUMN_INPUTS = {
  1: FORM_INPUTS.slice(0, 4),
  2: FORM_INPUTS.slice(4),
};

type InputColumnProps = {
  colNumber: 1 | 2 | "1" | "2";
};

const InputColumn = ({ colNumber }: InputColumnProps) => {
  const formCtx = useContext(FormContext);
  const { onChangeInputValue, onChangeSelectValue, inputValues } = formCtx;

  if (typeof colNumber === "number") {
    colNumber = `${colNumber}`;
  }

  const inputs = COLUMN_INPUTS[colNumber];

  let className = "form__input-column";
  className += ` form__input-column--${colNumber}`;

  return (
    <div className={className}>
      <Stack>
        {inputs.map((input, i) => {
          const { nameAndId, label, options, type } = input;
          const commonProps = {
            key: i,
            value: inputValues.nameAndId,
            nameAndId,
            label,
          };
          return options ? (
            <Select
              {...commonProps}
              onChange={onChangeSelectValue}
              options={options}
            />
          ) : (
            <Input
              {...commonProps}
              onChange={onChangeInputValue}
              type={type!}
            />
          );
        })}
      </Stack>
    </div>
  );
};
