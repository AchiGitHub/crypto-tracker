import {
  FETCH_COIN_DETAILS_FAILED,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS,
  SEARCH_COINS
} from "./types";

const initialState = {
  loading: false,
  coinData: [],
  error: null,
  allCoinData: []
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
        coinData: action.payload.data,
        allCoinData: action.payload.data
      };
    case FETCH_COIN_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        coinData: [],
        allCoinData: []
      };
    case SEARCH_COINS:
      var searchFilterList = state.allCoinData.filter(elem => {
        return elem.name.toLowerCase().includes(action.payload.query.toLowerCase())
      });
      return {
        ...state,
        coinData: searchFilterList
      };
    default:
      return state;
  }
}