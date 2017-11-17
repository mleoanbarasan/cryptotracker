import {
    START_FETCH_CRYPTO,
    FETCH_CRYPTO_SUCCESS,
    FETCH_CRYPTO_FAIL
} from './types';

export const fetchCrypto = () => {
    return(dispatch) => {
        dispatch({ type: START_FETCH_CRYPTO });

        fetch('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => response.json()).then((data) => {
            dispatch({ type: FETCH_CRYPTO_SUCCESS, payload: data});
        }).catch((error) => {
            dispatch({ type: FETCH_CRYPTO_FAIL, payload: error});
        });
    }
}