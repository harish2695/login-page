import React, { useState } from "react";
import "./Regester.css";

import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { Alert } from "react-bootstrap";

function Register(props) {
  const [userId, setUserId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [password, setPassword] = useState("");

  const changeHandler = e => {
    setUserId(e.target.value);
  };

  const changePasswor = e => {
    setPassword(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem("userId", userId);
    localStorage.setItem("password", password);
    props.history.push("/");
  };
  return (
    <div className="Register">
      <Form className="regester-form" onSubmit={onSubmitForm}>
        <p className="text-center">REGISTER USER</p>
        <FormGroup>
          {submitted && !userId && (
            <div className="help-block">UserId is required...!</div>
          )}
          <InputGroup className="mt-3 mb-3">
            <Input
              type="text"
              placeholder="User ID"
              name="userId"
              value={userId}
              onChange={changeHandler}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <FaUser />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup className="mt-3 mb-3">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changePasswor}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <FaLock />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <Button
          type="submit"
          color="primary"
          className="button-value"
          size="sm"
          block
        >
          Regester
        </Button>
        <div className="text-center pt-5 mt-3">Already regestered?</div>
        <a
          href="#/"
          className="btn btn-block btn-default mt-3 mb-3"
          id="register-value"
        >
          Login
        </a>
      </Form>
    </div>
  );
}

export default Register;
