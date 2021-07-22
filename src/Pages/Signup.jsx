import React from 'react';
import TextField from '../components/Forms/TextField';
import Button from '../components/Button/Button';
import Text from '../components/Text/Text';

export default function Signup(props)
{
    return (
        <div className="white-box container">
            <TextField
            label="First name:"
            placeholder="John"
            type="text"
            id="first-name"
          />
          <TextField
            label="Last name:"
            placeholder="Petterson"
            type="text"
            id="last-name"
          />
          <TextField
            label="E-mail address:"
            placeholder="myEmail@mydomain.com"
            type="email"
            id="email-address"
          />
          <TextField
            label="Password:"
            placeholder=""
            type="password"
            id="password"
          />
          <Button
          before={false}
          cssClass="btn btn-primary flex-item"
          text="Signup"
        />
        <a href="#">
        <Text
            text="Have already account? click here"
            textType="p"
            cssClass="center singup-text"
        />
        </a>
        </div>
    );
}