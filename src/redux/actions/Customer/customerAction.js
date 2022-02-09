


const getClientsRequest = () => {
    return {
      type: "GET_CLIENT_REQUEST",
    };
  };
  
  const getClientsSuccess = (clients) => {
    return {
      type: "GET_CLIENT_SUCCESS",
      payload: clients,
    };
  };
  
  const getClientsFailure = (error) => {
    return {
      type: "GET_CLIENT_FAILURE",
      payload: error,
    };
  };
  
  const url = "https://jsonplaceholder.typicode.com/users";
  
  export const fetchClients = () => {
    return (dispatch) => {
      dispatch(getUsersRequest());
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

      })
        .then((response) => response.json())
        .then((data) => {
          const clients = data;
          dispatch(getUsersSuccess(clients));
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(getUsersFailure(errorMessage));
        });
    };
  };