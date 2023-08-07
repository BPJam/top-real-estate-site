import
{
    FETCH_DATA_ADMIN,
    FETCH_DATA_ADMIN_ERROR,
    FETCH_DATA_ADMIN_SUCCESS,

    FETCH_DATA_USER,
    FETCH_DATA_USER_ERROR,
    FETCH_DATA_USER_SUCCESS,

    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_ERROR,

    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,

    ADMIN_LOGIN,
    USER_LOGIN
}
from "../constants";

export const fetchDataUser = (payload) => ({
    type: FETCH_DATA_USER,
    payload
});

export const fetchDataUserSuccess = (payload) => ({
    type: FETCH_DATA_USER_SUCCESS,
    payload
});

export const fetchDataUserError = (payload) => ({
    type: FETCH_DATA_USER_ERROR,
    payload
});

export const fetchDataAdmin = (payload) => ({
    type: FETCH_DATA_ADMIN,
    payload
});

export const fetchDataAdminSuccess = (payload) => ({
    type: FETCH_DATA_ADMIN_SUCCESS,
    payload
});

export const fetchDataAdminError = (payload) => ({
    type: FETCH_DATA_ADMIN_ERROR,
    payload
});

export const adminLogin = (payload) => ({
    type: ADMIN_LOGIN,
    payload
});

export const userLogin = (payload) => ({
    type: USER_LOGIN,
    payload
});

export const adminLoginSuccess = (payload) => ({
    type: ADMIN_LOGIN_SUCCESS,
    payload
});

export const adminLoginError = (payload) => ({
    type: ADMIN_LOGIN_ERROR,
    payload
});

export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
});

export const userLoginError = (payload) => ({
    type: USER_LOGIN_ERROR,
    payload
});
