import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialNameState = List();

export const name = handleActions({}, initialNameState);
