import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  initApp,
  updateAppLogo,
} from '../actions';
import {
  getAppLogo,
  getAppSecret,
} from '../selectors';

const App = ({
  appLogo,
  appSecret,
  initApp: _initApp,
  updateAppLogo: _updateAppLogo,
}) => {
  useEffect(() => {
    // initialize app
    _initApp('aim for success');
  }, [_initApp]);

  const onUpdateLogo = useCallback(() => _updateAppLogo(), [_updateAppLogo]);

  return (
    <div className="App">
      <header className="App-header">
        {appLogo && (
          <img src={appLogo} className="App-logo" alt="logo" />
        )}
        <p>
          Our app secret is:
          {appSecret || 'not ready'}
        </p>
        <button
          className="logo-button"
          type="button"
          onClick={onUpdateLogo}
        >
          Update Logo
        </button>
      </header>
    </div>
  );
};

App.propTypes = {
  appSecret: PropTypes.string.isRequired,
  appLogo: PropTypes.string,
  initApp: PropTypes.func,
  updateAppLogo: PropTypes.func,
};

App.defaultProps = {
  appLogo: null,
  initApp: f => f,
  updateAppLogo: f => f,
};

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
