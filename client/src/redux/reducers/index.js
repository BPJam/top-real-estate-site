import { combineReducers } from "redux";
import responseReducer from "./responseReducer";
import loginUserReducer from "./loginUserReducer";
import loginAdminReducer from "./loginAdminReducer";

const reducer = combineReducers({
    response: responseReducer,
    loginUser: loginUserReducer,
    loginAdmin: loginAdminReducer
});

export default reducer;
