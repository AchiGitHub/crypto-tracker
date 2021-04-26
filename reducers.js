// Reducers: combine all reducers of the app
import { combineReducers } from 'redux'


export default combineReducers({
    ["types.CLEAR_ERROR_MSG"]: (state) => (
		{ ...state, error: null }
	),
})
