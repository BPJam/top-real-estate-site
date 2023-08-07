import { call, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN } from '../constants';

function* WorkerSaga(action) {

}

function* loginUserSaga() {
    yield takeLatest(USER_LOGIN, WorkerSaga);
}

export default loginUserSaga;
