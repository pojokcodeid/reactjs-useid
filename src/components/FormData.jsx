import { useId } from "react";

const FormData = () => {
  const id = useId();
  return (
    <form>
      <label htmlFor={id + "_firstName"}>First Name :</label>
      <input type="text" id={id + "_firstName"} />
      <hr />
      <label htmlFor={id + "_lastName"}>last Name :</label>
      <input type="text" id={id + "_lastName"} />
    </form>
  );
};

export default FormData;
