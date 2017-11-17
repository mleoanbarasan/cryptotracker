import {
    START_FETCH_CRYPTO,
    FETCH_CRYPTO_SUCCESS,
    FETCH_CRYPTO_FAIL
} from '../actions/types';
const INITIAL_STATE = {
    loading: false,
    data: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case START_FETCH_CRYPTO:
            return { ...state, loading: true};
        case FETCH_CRYPTO_SUCCESS:
            return { ...state, loading: false, error: '' , data: action.payload};
        case FETCH_CRYPTO_FAIL:
            return { INITIAL_STATE, error: 'Failed to get the crypto currency data at the moment'};
        default:
            return state;
    }
}