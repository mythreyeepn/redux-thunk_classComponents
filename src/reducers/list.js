import { combineReducers } from 'redux'

export function ProductsList(state = {items:[]}, action) {
  switch (action.type) {
    case 'FOO_LIST_SUCCESS':
      return {...state,items:action.items};

    case 'FOO_LIST_RESET':
      return [];

    default:
      return state;
  }
}

export default ProductsList