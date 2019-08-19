import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialUserSessionState = List();

export const userSession = handleActions({}, initialUserSessionState);
