import { call, put, takeLatest } from 'redux-saga/effects';
import { ADMIN_LOGIN } from '../constants';
import { adminLoginError, adminLoginSuccess } from '../actions/actionCreator';

function* WorkerSaga(action) {
    const data = action.payload;

    if (data.accessToken) {
        yield put(adminLoginSuccess(data));
    } else {
        yield put(adminLoginError(data));
    }
}

function* loginAdminSaga() {
    yield takeLatest(ADMIN_LOGIN, WorkerSaga);
}

export default loginAdminSaga;
