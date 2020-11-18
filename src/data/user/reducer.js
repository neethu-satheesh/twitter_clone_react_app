import * as actions from './actions'

const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
       case actions.SET_USER:
            return action.payload
        default:
            return state;
    }
}

export default reducer;