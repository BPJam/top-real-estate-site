import { RELOAD_TYPE_CELL_ADMIN_PANEL, SET_TYPE_CELL_ADMIN_PANEL } from "../constants";

const initialState = {
    state: {
        thumbnail: true,
        list: false
    }
}

const typeCellAdmPlReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TYPE_CELL_ADMIN_PANEL:
            return {
                ...state,
                state: {
                    thumbnail: false,
                    list: false,
                    [payload]: true
                }
            }

        case RELOAD_TYPE_CELL_ADMIN_PANEL:
            return {
                state: {
                    thumbnail: true,
                    list: false
                }
            }

        default:
            return state
    }
}

export default typeCellAdmPlReducer;
