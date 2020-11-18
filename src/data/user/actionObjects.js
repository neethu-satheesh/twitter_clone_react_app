import { SET_USER } from "./actions"
import * as actions from './actions'

export const setUserObject = (user) => {
    return {
        type: actions.SET_USER,
        payload: user
    }
}