import { useContext } from "react";

import { FORM_INPUTS } from "../../utils/constants";
import { FormContext } from "../../store/FormContext";
import LinkedinConnection from "../LinkedInConnection";

const Form = () => {
  const { saving, theme, version, onToggleTheme, onToggleVersion, onSubmit } =
    useContext(FormContext);

  return (
    <form className="form" onSubmit={onSubmit}>
      <LinkedinConnection connectionActive={false} />
    </form>
  );
};

export default Form;
