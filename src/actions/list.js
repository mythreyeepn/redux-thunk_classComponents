import axios from 'axios'
export function error(error) {
  return {type: 'FOO_LIST_ERROR', error};
}

export function loading(loading) {
  return {type: 'FOO_LIST_LOADING', loading};
}

export function success(items) {
  return {type: 'FOO_LIST_SUCCESS', items};
}

export function list() {
  return (dispatch) => {
    dispatch(loading(true));

    axios({
        method: 'post',
        url: 'http://localhost:8080/usersGetData',
        data: {
          firstName: 'Finn',
          lastName: 'Williams'
        }
      })
      .then(data => {
        dispatch(loading(false));
        dispatch(success(data.data));
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message))
      });
  };
}

export function reset() {
  return {type: 'FOO_LIST_RESET'};
}