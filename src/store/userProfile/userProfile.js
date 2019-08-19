import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialUserProfileState = List();

export const userProfile = handleActions({}, initialUserProfileState);
