import { all } from 'redux-saga/effects';
import fetchDataSaga from './fetchDataSaga';
import loginAdminSaga from './loginAdminSaga';
import loginUserSaga from './loginUserSaga';

export default function* rootSaga() {
    yield all([ fetchDataSaga(), loginAdminSaga(), loginUserSaga() ]);
}
