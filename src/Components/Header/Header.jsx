import React, { Component } from "react";
import { Navbar, Button } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-root">
        <Navbar color="light" light expand="md">
          <h3 style={{ marginLeft: "5px", color: "blue" }}>Login App</h3>

          <Button
            style={{ marginLeft: "170vh" }}
            onClick={this.props.handleButton}
          >
            Logout
          </Button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
