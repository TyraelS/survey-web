import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { initialNameState, name } from './survey/name';
import { initialQuestionsState, questions } from './survey/questions';

export const initialSurveyState = Map({
  name: initialNameState,
  questions: initialQuestionsState
});

export const survey = combineReducers({ name, questions });
