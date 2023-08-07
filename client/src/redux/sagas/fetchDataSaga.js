import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_DATA_ADMIN, FETCH_DATA_USER } from '../constants';
import { fetchDataAdminError, fetchDataAdminSuccess, fetchDataUserError, fetchDataUserSuccess } from '../actions/actionCreator';

function* userWorkerSaga(action) {
    const data = action.payload;

    if(data.accessToken) {
        yield put(fetchDataUserSuccess(data));
    } else {
        yield put(fetchDataUserError(data));
    }
}

function* adminWorkerSaga(action) {
    const data = action.payload;

    if(data.accessToken) {
        yield put(fetchDataAdminSuccess(data));
    } else {
        yield put(fetchDataAdminError(data));
    }
}

function* fetchDataSaga() {
    yield takeEvery(FETCH_DATA_USER, userWorkerSaga);
    yield takeEvery(FETCH_DATA_ADMIN, adminWorkerSaga);
}

export default fetchDataSaga;
