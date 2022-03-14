import React, { useState } from "react";

const ContactForm = () => {
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLasttName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function validChangeFirstName(origin) {
    const value = document.getElementById("first-name").value;
    const regex = /^[a-zA-Z\\-]+$/;

    if (value.length < 1 || value.match(regex) === null) {
      if (origin === "button") {
        return false;
      } else {
        setErrorFirstName(<p>Minimum 1 letter, no special characters expect &apos;-&apos; or space between words.</p>);
      }
    } else {
      if (origin === "button") {
        return true;
      } else {
        setErrorFirstName(false);
      }
    }
  }
  function validChangeLastName(origin) {
    const value = document.getElementById("last-name").value;
    const regex = /^[a-zA-Z\\-]+$/;

    if (value.length < 1 || value.match(regex) === null) {
      if (origin === "button") {
        return false;
      } else {
        setErrorLastName(<p>Minimum 1 letter, no special characters expect &apos;-&apos; or space between words.</p>);
      }
    } else {
      if (origin === "button") {
        return true;
      } else {
        setErrorLastName(false);
      }
    }
  }
  function validChangeEmail(origin) {
    const value = document.getElementById("email").value;
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.exec(value) === null) {
      if (origin === "button") {
        return false;
      } else {
        setErrorEmail(<p>This is not a valid email adress.</p>);
      }
    } else {
      if (origin === "button") {
        return true;
      } else {
        setErrorEmail(false);
      }
    }
  }
  function validChangeMessage(origin) {
    const value = document.getElementById("message").value;
    if (value.length > 400 || value.length < 20) {
      if (origin === "button") {
        return false;
      } else {
        setErrorMessage(<p>Minimum 20 and maximum 400 characters</p>);
      }
    } else {
      if (origin === "button") {
        return true;
      } else {
        setErrorMessage(false);
      }
    }
  }

  function buttonVisible() {
    if (
      validChangeFirstName("button") &&
      validChangeLastName("button") &&
      validChangeEmail("button") &&
      validChangeMessage("button")
    ) {
      document.getElementById("buttonSubmit").disabled = false;
    } else {
      document.getElementById("buttonSubmit").disabled = true;
    }
  }
  return (
    <form onChange={buttonVisible}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          onChange={validChangeFirstName}
          className="form-control"
          id="first-name"
          aria-describedby="emailHelp"
        />
        {errorFirstName}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" onChange={validChangeLastName} className="form-control" id="last-name" />
        {errorLasttName}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" onChange={validChangeEmail} className="form-control" id="email" />
        {errorEmail}
      </div>
      <div className="mb-3">
        <label htmlFor="messageArea" className="form-label">
          Message
        </label>
        <textarea className="form-control" onChange={validChangeMessage} id="message" rows="3"></textarea>
        {errorMessage}
      </div>
      <button type="submit" id="buttonSubmit" className="btn btn-primary" disabled>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
