import React, { useContext, useState, useEffect } from "react";
import { Card, Breadcrumb, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import { UserContext } from "../../context/UserContext";

export default function Edit(props) {
  const { users, updateUser } = useContext(UserContext);
  let history = useHistory();

  const current_user = props.match.params.id;

  const [selectedUser, setSeletedUser] = useState({
    username: "",
    name: "",
    designation: "",
  });

  const loadUserDetails = () => {
    const selectedUser = users.find((user) => user.username === current_user);
    setSeletedUser(selectedUser);
  };

  const handleInputChange = (e) => {
    setSeletedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  useEffect(loadUserDetails, []);

  const handleDiscardClick = () => {
    history.push("/");
  };

  const handleSubmitClick = () => {
    if (!selectedUser.username) {
      alert("Username is required!");
      return;
    }
    updateUser(selectedUser);
    history.push("/");
  };

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
                disabled={true}
                name="username"
                type="text"
                placeholder="Enter username"
                value={selectedUser.username || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="inputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                value={selectedUser.name || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="inputDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                name="designation"
                type="text"
                placeholder="Enter designation"
                value={selectedUser.designation || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleDiscardClick} variant="secondary">
                Discard
              </Button>
              &nbsp;
              <Button onClick={handleSubmitClick} variant="primary">
                Save Changes
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
