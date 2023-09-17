import { combineReducers } from "redux";
import responseReducer from "./responseReducer";
import loginUserReducer from "./loginUserReducer";
import loginAdminReducer from "./loginAdminReducer";
import setStateAdmPlReducer from "./setStateAdmPlReducer";
import currentShowAdmPlReducer from "./currentShowAdmPlReducer";

const reducer = combineReducers({
    response: responseReducer,
    loginUser: loginUserReducer,
    loginAdmin: loginAdminReducer,
    setStateAdminPanel: setStateAdmPlReducer,
    currentShowAdminPanel: currentShowAdmPlReducer
});

export default reducer;
