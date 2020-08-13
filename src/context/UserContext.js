import React, { createContext, useReducer } from "react";
import ReduceUser from "../reducers/UserReducer";

const initialState = {
  users: [
    {
      username: "uttam123",
      name: "Uttam Giri",
      designation: "Frontend Developer",
    },
    { username: "anup.shr", name: "Anup Shrestha", designation: "UX Engineer" },
    {
      username: "sheejan",
      name: "Sheejan Tripathi",
      designation: "Backend Developer",
    },
  ],
};

export const UserContext = createContext(initialState);
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReduceUser, initialState);

  function removeUser(username) {
    dispatch({
      type: "REMOVE_USER",
      payload: username,
    });
  }

  function addUser(user) {
    // Call add user API and send dispatch with response.
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  function updateUser(user) {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  }

  function listUsers() {
    dispatch({
      type: "LIST_USERS",
    });
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        updateUser,
        listUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
