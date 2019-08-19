import { Map } from 'immutable';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { questions, initialQuestionsState } from './questions/questions';
import { name, initialNameState } from './name/name';

export const initialSurveyState = Map({
  name: initialNameState,
  questions: initialQuestionsState
});

export const survey = handleActions(
  combineReducers({
    name,
    questions
  }),
  initialSurveyState
);
