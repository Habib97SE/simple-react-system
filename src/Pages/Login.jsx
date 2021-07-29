import React from "react";
import TextField from "../components/Forms/TextField";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

export default function Login(props) {
  return (
    <>
      <div className="white-box container">
        <Text text="Login" textType="h1" cssClass="center" />
        <div className="flex-item">
          <TextField
            label="Usernmame:"
            placeholder="myEmail@mydomain.com"
            type="email"
            id="email-address"
          />
        </div>
        <div className="flex-item">
          <TextField label="Password:" type="password" id="password" />
        </div>
        <Button
          before={false}
          cssClass="btn btn-primary login-btn flex-item"
          icon="fas fa-sign-in-alt"
          text="Login"
        />
        <a href="#">
          <Text
            text="Forgot your password?"
            textType="p"
            cssClass="text-success center"
          />
          <a href="/signup">
            <Text
              text="Don't have account? Register one here"
              textType="p"
              cssClass="center"
            />
          </a>
        </a>
      </div>
    </>
  );
}
