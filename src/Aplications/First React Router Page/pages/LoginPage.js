import React from "react";

const LoginPage = props => {
  return (
    <div>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Podaj haslo
        <input type="password" />
      </label>
      <br />
      <button>zaloguj</button>
    </div>
  );
};

export default LoginPage;
