import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialTeachersState = List();

export const teachers = handleActions({}, initialTeachersState);
