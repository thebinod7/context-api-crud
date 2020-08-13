import React from "react";
import { Card, Breadcrumb, Form } from "react-bootstrap";

export default function Edit() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <h3>Edit user details.</h3>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="inputUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="inputName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="inputDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                name="designation"
                type="text"
                placeholder="Enter designation"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
