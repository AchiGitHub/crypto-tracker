import {
  FETCH_COIN_DETAILS_FAILED,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS
} from "./types";

const initialState = {
  loading: false,
  coinData: [],
  error: null
};

export default function coinDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_DETAILS:
      return {
        ...state,
        loading: true
      };
    case FETCH_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        coinData: action.payload.data
      };
    case FETCH_COIN_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}