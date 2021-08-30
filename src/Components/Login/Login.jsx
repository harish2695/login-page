import React, { Component } from "react";
import "./Login.css";
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

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      submitted: false,
      loading: false,
      error: false
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userId, password } = this.state;

    //login logic
    this.setState({ submitted: true });
    if (
      userId === localStorage.getItem("userId") &&
      password === localStorage.getItem("password")
    ) {
      localStorage.setItem("user", "user");
      this.props.history.push("/home");
    }
    if (userId && password) {
      this.setState({
        error: true,
        submitted: false
      });
    }
  };

  render() {
    const { password, submitted, error, userId } = this.state;
    return (
      <div className="login">
        <Form className="login-form " onSubmit={this.handleSubmit}>
          <p className="text-center">LOGIN TO CONTINUE...</p>
          <FormGroup>
            <div>
              {submitted && !userId && (
                <div className="help-block">UserId is required...!</div>
              )}
            </div>
            <InputGroup className="mt-3 mb-3">
              <Input
                type="text"
                placeholder="User ID"
                name="userId"
                value={this.state.userId}
                onChange={this.changeHandler}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FaUser />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div>
              {submitted && !password && (
                <div className="help-block">password is required...!</div>
              )}
            </div>
            <InputGroup className="mt-3 mb-3">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.changeHandler}
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
            onClick={this.clickHandler}
          >
            Log in
          </Button>

          <div className="text-center pt-5 mt-3">Don't have an account?</div>
          <a
            href="#/register"
            className="btn btn-block btn-default mt-3 mb-3"
            id="register-value"
          >
            Register Now
          </a>
        </Form>
        {error && (
          <Alert className="alert-value" variant="danger">
            Username or password is wrong
          </Alert>
        )}
      </div>
    );
  }
}

export default Login;
