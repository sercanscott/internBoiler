import I from 'immutable';

import {
  INIT_APP_SUCCESS,
  INIT_APP_FAILURE,
  UPDATE_LOGO_SUCCESS,
} from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  appSecret: 'initial',
  errorMessage: 'none',
  appLogo: null,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_APP_SUCCESS: {
      const { appSecret } = action.payload;
      return state.set('appSecret', appSecret);
    }
    case INIT_APP_FAILURE: {
      const { errorMessage } = action.payload;
      return state
        .set('errorMessage', errorMessage)
        .set('appSecret', INITIAL_STATE.get('appSecret', '?'));
    }
    case UPDATE_LOGO_SUCCESS: {
      const { src } = action.payload;
      return state.set('appLogo', src);
    }
    default:
      return state;
  }
};
