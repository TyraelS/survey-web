import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form/immutable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { admins, initialAdminsState } from './admins';
import { questions, initialQuestionsState } from './questions';
import { students, initialStudentsState } from './students';
import { survey, initialSurveyState } from './survey';
import { surveys, initialSurveysState } from './surveys';
import { surveyStudents, initialSurveyStudentsState } from './surveyStudents';
import { teachers, initialTeachersState } from './teachers';
import { profile, initialProfileState } from './profile';
import { session, initialSessionState } from './session';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promise, routerMiddleware(history)));

const initialStoreState = Map({
  userSession: initialSessionState,
  userProfile: initialProfileState,
  surveys: initialSurveysState,
  questions: initialQuestionsState,
  admins: initialAdminsState,
  teachers: initialTeachersState,
  students: initialStudentsState,
  survey: initialSurveyState,
  surveyStudents: initialSurveyStudentsState
});

export const store = createStore(
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
    session,
    profile,
    surveys,
    questions,
    admins,
    teachers,
    students,
    survey,
    surveyStudents
  }),
  initialStoreState,
  enhancer
);
