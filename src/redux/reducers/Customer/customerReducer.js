const initialState = {
    clients: [],
    loading: false,
    error: null,
  };
  
  const clients = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CLIENTS_REQUEST":
        return { ...state, loading: true };
      case "GET_CLIENTS_SUCCESS":
        return { loading: false, clients: action.payload };
      case "GET_CLIENTS_FAILURE":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default users;