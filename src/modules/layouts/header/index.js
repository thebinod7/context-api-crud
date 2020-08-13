import React from "react";

import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";

import { useHistory } from "react-router";

export default function Index() {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={goHome} href="#home">
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
