import { Map } from 'immutable';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { questions, initialQuestionsState } from './survey/questions';
import { name, initialNameState } from './survey/name';

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
