import { REQUEST_WEATHER, RECEIVE_WEATHER, CLEAR_WEATHER, DELETE_CITY } from '../actions/index';

const initialState = {
  isLoading: false,
  cities:[]
};

function weather(state = initialState, action) {
  switch (action.type) {
  case REQUEST_WEATHER:
    return Object.assign({}, state, {
      isLoading: true
    });
  case RECEIVE_WEATHER:
    return Object.assign({}, state, {
      isLoading: false,
      cities: [action.city, ...state.cities]
    });
  case CLEAR_WEATHER:
    return Object.assign({}, state, {
      isLoading: false,
      cities: []
    });
  case DELETE_CITY:
    console.log("trying to be deleted", action.id);
    return state;
  default:
    return state;
  }
}

export default weather;
