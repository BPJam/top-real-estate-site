import { combineReducers } from "redux";
import responseReducer from "./responseReducer";
import loginUserReducer from "./loginUserReducer";
import loginAdminReducer from "./loginAdminReducer";
import setStateAdmPlReducer from "./setStateAdmPlReducer";
import currentShowAdmPlReducer from "./currentShowAdmPlReducer";
import typeCellAdmPlReducer from "./typeCellAdmPlReducer";

const reducer = combineReducers({
    response: responseReducer,
    loginUser: loginUserReducer,
    loginAdmin: loginAdminReducer,
    setStateAdminPanel: setStateAdmPlReducer,
    currentShowAdminPanel: currentShowAdmPlReducer,
    typeCellAdminPanel: typeCellAdmPlReducer
});

export default reducer;
