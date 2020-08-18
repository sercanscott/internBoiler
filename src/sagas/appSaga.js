import {
  put,
  takeEvery,
  delay,
  select,
  call,
} from 'redux-saga/effects';
import {
  INIT_APP_REQUEST,
  INIT_APP_FAILURE,
  INIT_APP_SUCCESS,
  UPDATE_LOGO_REQUEST,
  UPDATE_LOGO_FAILURE,
  UPDATE_LOGO_SUCCESS,
} from '../constants/actionTypes';
import { getAppSecret } from '../selectors';
import { getRandomImage } from '../lib/api';

function* initApp(action) {
  try {
    // eslint-disable-next-line no-console
    console.log('init app saga called');
    yield delay(2000);
    const { appSecret } = action.payload;
    // eslint-disable-next-line no-console
    console.log('init request are done, now put success');
    yield put({
      type: INIT_APP_SUCCESS,
      payload: {
        appSecret,
      },
    });
  } catch (error) {
    yield put({
      type: INIT_APP_FAILURE,
      payload: error.message,
    });
  }
}

function* updateAppLogo() {
  try {
    const appSecret = yield select(getAppSecret);

    if (appSecret !== 'aim for success') {
      throw Error('App is not ready');
    }

    const { status, request: { responseURL } } = yield call(getRandomImage, 400, 400);

    if (status !== 200) {
      throw Error('Request failed for image');
    }

    yield put({
      type: UPDATE_LOGO_SUCCESS,
      payload: {
        src: responseURL,
      },
    });
  } catch (error) {
    yield put({
      type: UPDATE_LOGO_FAILURE,
      payload: error.message,
    });
  }
}

const appSagas = [
  takeEvery(INIT_APP_REQUEST, initApp),
  takeEvery(UPDATE_LOGO_REQUEST, updateAppLogo),
];

export default appSagas;
