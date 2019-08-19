import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialAdminsState = List();

export const admins = handleActions({}, initialAdminsState);
