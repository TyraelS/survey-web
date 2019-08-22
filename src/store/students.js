import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialStudentsState = List();

export const students = handleActions({}, initialStudentsState);
