const reducer = (state, payload) => {
  switch (payload.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    case 'LOGIN':
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      };
    case 'LOGOUT_REQUEST':
      delete state.user;
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: state.employees.length + 1,
            ...payload.employee,
          },
        ],
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: payload.posts,
      };
    case 'SET_ERROR':
      return state;
    default:
      return state;
  }
};

export default reducer;
