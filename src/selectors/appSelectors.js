import { createSelector } from 'reselect';
// import I from 'immutable';

export const getApp = state => state.app;

export const getAppSecret = createSelector(
  [getApp],
  app => app.get('appSecret', 'none-found'),
);

export const getAppLogo = createSelector(
  [getApp],
  app => app.get('appLogo', null),
);
