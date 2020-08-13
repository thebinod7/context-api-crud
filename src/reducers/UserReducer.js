export default (state, action) => {
  switch (action.type) {
    case "LIST_USERS":
      return state;

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.username !== action.payload),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "UPDATE_USER":
      const updatedUser = action.payload;

      const updatedusers = state.users.map((user) => {
        if (user.username === updatedUser.username) {
          return updatedUser;
        }
        return user;
      });

      return {
        ...state,
        users: updatedusers,
      };
    default:
      return state;
  }
};
