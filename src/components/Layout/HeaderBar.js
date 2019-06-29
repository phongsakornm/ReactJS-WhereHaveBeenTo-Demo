import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";

export class HeaderBar extends Component {
  render() {
    return (
      <Navbar style={headerStyle} bg="dark" variant="dark">
        <Container>
          <Link style={linkStyle} to={"/"}>
            <img
              alt="where have been to"
              src={Logo}
              width="160px"
              className="d-inline-block align-top"
            />
          </Link>
          &nbsp;&nbsp;
          <Nav className="mr-auto">
            <Link style={linkStyle} to={"/"}>
              Home
            </Link>
            <Link style={linkStyle} to={"/movies"}>
              Movie
            </Link>
            <Link style={linkStyle} to={"/todos"}>
              Todo
            </Link>
          </Nav>
          <Nav style={{ textAlign: "right" }}>
            <Link style={linkStyle} to={"/login"}>
              | Log in
            </Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

const headerStyle = {
  // paddingTop: "40px",
  // paddingBottom: "40px"
};

const linkStyle = {
  color: "#edf7fd",
  fontSize: "19px",
  padding: 5,
  paddingTop: 5,
  textDecoration: "none"
};

export default HeaderBar;
