import { useContext } from "react";

import { FORM_INPUTS } from "../../utils/constants";
import { FormContext } from "../../store/FormContext";
import LinkedinConnection from "../LinkedInConnection";
import Avatar from "../Avatar";
import Switch from "../Switch";

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
    </form>
  );
};

export default Form;
