/* eslint-disable prettier/prettier */
import axios from "axios";
import { FETCH_COIN_DETAILS, FETCH_COIN_DETAILS_FAILED, FETCH_COIN_DETAILS_SUCCESS, SEARCH_COINS } from './types';

export function fetchCoinList() {
    return dispatch => {
        dispatch(fetchCoinDetails());
        axios
            .get(`https://api.coincap.io/v2/assets`)
            .then(res => {
                dispatch(fetchCoinDetailsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchCoinDetailsFailed(err.message));
            });
    };
};

export function searchCoinList(query) {
    return dispatch => {
        dispatch(searchCoin(query));
    }
}

const fetchCoinDetails = () => ({
    type: FETCH_COIN_DETAILS
});

const fetchCoinDetailsSuccess = data => ({
    type: FETCH_COIN_DETAILS_SUCCESS,
    payload: {
        ...data
    }
});

const fetchCoinDetailsFailed = error => ({
    type: FETCH_COIN_DETAILS_FAILED,
    payload: {
        error
    }
});

const searchCoin = (query) => ({
    type: SEARCH_COINS,
    payload: {
        query
    }
});