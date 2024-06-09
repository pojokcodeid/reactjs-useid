import { useId } from "react";

const PasswordField = () => {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password :
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
        consequuntur?
      </p>
    </>
  );
};

export default PasswordField;
