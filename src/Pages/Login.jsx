import React from "react";
import TextField from "../components/Forms/TextField";
import Button from "../components/Button/Button";
export default function Login(props) {
  return (
    <>
      <div className="white-box">
        <TextField
          label="Usernmame:"
          placeholder="myEmail@mydomain.com"
          type="email"
        />
        <TextField label="Password:" type="password" />
        <Button cssClass="btn btn-primary login-btn" text="Login" />
        <p className="center">Forgot your password?</p>
      </div>
    </>
  );
}
