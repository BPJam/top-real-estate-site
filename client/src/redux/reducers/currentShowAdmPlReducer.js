import { RELOAD_CURRENT_SHOW_ADMIN_PANEL, SET_CURRENT_SHOW_ADMIN_PANEL } from "../constants";

const initialState = {
    state: {
        act: true,
        arh: false
    }
}

const currentShowAdmPlReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_SHOW_ADMIN_PANEL:
            return {
                ...state,
                state: {
                    act: false,
                    arh: false,
                    [payload]: true
                }
            }

        case RELOAD_CURRENT_SHOW_ADMIN_PANEL:
            return {
                state: {
                    act: true,
                    arh: false
                }
            }

        default:
            return state
    }
}

export default currentShowAdmPlReducer;
