import React, { createContext, useReducer } from "react";
import ReduceUser from "../reducers/UserReducer";

const initialState = {
  users: [
    {
      name: "John Doe",
      username: "john123",
      designation: "Frontend Developer",
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
