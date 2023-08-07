import { FETCH_DATA_ADMIN_ERROR, FETCH_DATA_ADMIN_SUCCESS, FETCH_DATA_USER_ERROR, FETCH_DATA_USER_SUCCESS } from "../constants";

const initialState = {
    data: {}
}

const responseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_DATA_ADMIN_SUCCESS:
            return {
                data: { accessToken: payload.accessToken, admin: payload.admin }
            }

        case FETCH_DATA_USER_SUCCESS:
            return {
                data: { accessToken: payload.accessToken, user: payload.user }
            }

        case FETCH_DATA_ADMIN_ERROR:
        case FETCH_DATA_USER_ERROR:
            return {
                data: { status: payload.status, message: payload.data.message }
            }

        default:
            return state
    }
}

export default responseReducer;
