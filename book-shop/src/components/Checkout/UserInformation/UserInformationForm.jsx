import { useState } from "react";
import classes from "./UserInformationForm.module.css";
import FormInput from "./FormInput";

/**
 * It is a component for a user form.
 */ 

const UserInfomationForm = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    secondName: "",
    street: "",
    houseNumber: "",
    postcode: "",
    city: "",
    email: "",
  });

  const userData = JSON.parse(localStorage.getItem("user-info"));

  const inputs = [
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      label: "Vorname*",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage:
        "Der Vorname sollte 3-16 Zeichen lang sein und darf keine Zahlen oder Sonderzeichen enthalten.",
      defaultValue: userData ? userData.firstName : null,
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      label: "Nachname*",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage:
        "Der Nachname sollte 3-16 Zeichen lang sein und darf keine Zahlen oder Sonderzeichen enthalten.",
      defaultValue: userData ? userData.lastName : null,
    },
    {
      id: "street",
      name: "street",
      type: "text",
      label: "Straße*",
      required: true,
      pattern: "^[A-Za-z/s/.]{3,20}$",
      errorMessage: "Die Straße sollte mindestens 3 Zeichen lang sein.",
      defaultValue: userData ? userData.address.street : null,
    },
    {
      id: "houseNumber",
      name: "houseNumber",
      type: "text",
      label: "Hausnummer*",
      required: true,
      pattern: "^[0-9]{1,4}$",
      errorMessage: "Bitte geben Sie eine gültige Hausnummer ein.",
      defaultValue: userData ? userData.address.houseNumber : null,
    },
    {
      id: "postcode",
      name: "postcode",
      type: "text",
      label: "Postleutzahl*",
      required: true,
      pattern: "^[0-9]{5}$",
      errorMessage: "Bitte geben Sie eine gültige Postleitzahl ein.",
      defaultValue: userData ? userData.address.postcode : null,
    },
    {
      id: "city",
      name: "city",
      type: "text",
      label: "Stadt*",
      required: true,
      pattern: "^[A-Za-z]{3,20}$",
      errorMessage: "Die Stadt sollte mindestens 3 Zeichen lang sein.",
      defaultValue: userData ? userData.address.city : null,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      label: "E-mail*",
      required: true,
      errorMessage: "Bitte geben Sie eine gültige E-Mail ein.",
      defaultValue: userData ? userData.email : null,
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  return (
    <article className={classes["user-information"]}>
      <h2>USER INFORMATION</h2>
      <form id="userForm" name="userForm" onSubmit={props.onSubmit}>
        <div className={classes["form-line"]}>
          <FormInput {...inputs[0]} onChange={onChange} />
          <FormInput {...inputs[1]} onChange={onChange} />
        </div>
        <div className={classes["form-line"]}>
          <FormInput {...inputs[2]} onChange={onChange} />
          <FormInput {...inputs[3]} onChange={onChange} />
        </div>
        <div className={classes["form-line"]}>
          <FormInput {...inputs[4]} onChange={onChange} />
          <FormInput {...inputs[5]} onChange={onChange} />
        </div>
        <div className={classes["form-line"]}>
          <FormInput {...inputs[6]} onChange={onChange} />
        </div>
      </form>
      <span>Alle Eingaben mit einem * sind erforderlich.</span>
    </article>
  );
};

export default UserInfomationForm;
