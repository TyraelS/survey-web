import { List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

export const questionsAction = createAction('QUESTION_ACTION');

export const initialQuestionsState = List();

export const questions = handleActions(
  {
    [questionsAction]: state => state
  },
  initialQuestionsState
);
