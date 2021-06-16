import { connect } from 'react-redux';
import App from '../components/App';

import {
  initApp,
  updateAppLogo,
} from '../actions';
import {
  getAppLogo,
  getAppSecret,
} from '../selectors';

const mapStateToProps = state => {
  const appSecret = getAppSecret(state);
  const appLogo = getAppLogo(state);

  return {
    appSecret,
    appLogo,
  };
};

const mapActionsToProps = {
  initApp,
  updateAppLogo,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
