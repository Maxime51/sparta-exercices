import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);

  function validInputChange(event) {
    const value = event.target.value;

    if (value.includes(" ")) {
      setError(<p>no spaces allowed</p>);
      return true;
    } else {
      setError(false);
      return false;
    }
  }

  function validForm() {
    const value = document.getElementById("firstNameInput").value;
    console.log(value);
  }

  return (
    <div>
      <form onSubmit={validForm}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={validInputChange}
            type="firstname"
            className="form-control"
            id="firstNameInput"
            aria-describedby="firstNameHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {error}
    </div>
  );
};

export default Form;
