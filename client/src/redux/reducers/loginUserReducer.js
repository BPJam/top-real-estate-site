import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../constants";

const initialState = {
    data: {}
}

const loginUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_SUCCESS:
            return {
                data: { accessToken: payload.accessToken, user: payload.user }
            }

        case USER_LOGIN_ERROR:
            return {
                data: { status: payload.status, message: payload.data.message }
            }

        default:
            return state
    }
}

export default loginUserReducer;
