import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialSessionState = List();

export const session = handleActions({}, initialSessionState);
