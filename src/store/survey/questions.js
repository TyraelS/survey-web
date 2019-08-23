import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialQuestionsState = List();

export const questions = handleActions({}, initialQuestionsState);
