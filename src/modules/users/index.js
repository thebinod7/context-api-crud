import React, { useState, useContext } from "react";
import { Table, Breadcrumb, Button, Modal, Form } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

import { useHistory } from "react-router";

export default function Index() {
  const { users, addUser, removeUser } = useContext(UserContext);
  let history = useHistory();

  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    designation: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddUser = () => {
    toggleModal();
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitClick = () => {
    addUser(formValues);
    toggleModal();
    setFormValues({});
  };

  const handleDeleteClick = (username) => {
    removeUser(username);
  };

  const handleEditClick = (username) => {
    history.push("/edit/" + username);
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length ? (
            users.map((user) => {
              return (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => handleEditClick(user.username)}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteClick(user.username)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={modal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="inputUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter username"
                value={formValues.username || ""}
              />
            </Form.Group>

            <Form.Group controlId="inputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter name"
                value={formValues.name || ""}
              />
            </Form.Group>

            <Form.Group controlId="inputDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                name="designation"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter designation"
                value={formValues.designation || ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
