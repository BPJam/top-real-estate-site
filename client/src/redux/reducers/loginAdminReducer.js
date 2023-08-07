import { ADMIN_LOGIN_ERROR, ADMIN_LOGIN_SUCCESS } from "../constants";

const initialState = {
    data: {}
}

const loginAdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN_SUCCESS:
            return {
                data: { accessToken: payload.accessToken, admin: payload.admin }
            }

        case ADMIN_LOGIN_ERROR:
            return {
                data: { status: payload.status, message: payload.data.message }
            }

        default:
            return state
    }
}

export default loginAdminReducer;
