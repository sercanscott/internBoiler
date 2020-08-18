import {
  INIT_APP_REQUEST, UPDATE_LOGO_REQUEST,
} from '../constants/actionTypes';

export const initApp = appSecret => ({
  type: INIT_APP_REQUEST,
  payload: {
    appSecret,
  },
});

export const updateAppLogo = () => ({
  type: UPDATE_LOGO_REQUEST,
});
