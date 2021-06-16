import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const App = ({
  appLogo,
  appSecret,
  initApp,
  updateAppLogo,
}) => {
  useEffect(() => {
    // initialize app
    initApp('aim for success');
  }, [initApp]);

  const onUpdateLogo = useCallback(() => updateAppLogo(), [updateAppLogo]);

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

export default App;
