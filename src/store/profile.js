import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialProfileState = List();

export const profile = handleActions({}, initialProfileState);
