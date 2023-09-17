import { RELOAD_STATE_ADMIN_PANEL, SET_STATE_ADMIN_PANEL } from "../constants";

const initialState = {
    state: {
        first: true,
        second: false,
        third: false,
        fourth: false
    }
}

const setStateAdmPlReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_STATE_ADMIN_PANEL:
            return {
                ...state,
                state: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    [payload]: true
                }
            }

        case RELOAD_STATE_ADMIN_PANEL:
            return {
                state: {
                    first: true,
                    second: false,
                    third: false,
                    fourth: false
                }
            }

        default:
            return state
    }
}

export default setStateAdmPlReducer;
