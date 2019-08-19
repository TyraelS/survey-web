import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form/immutable';
import { admins, initialAdminsState } from './admins/admins';
import { questions, initialQuestionsState } from './questions/questions';
import { students, initialStudentsState } from './students/students';
import { survey, initialSurveyState } from './survey/survey';
import { surveys, initialSurveysState } from './surveys/surveys';
import { surveyStudents, initialSurveyStudentsState } from './surveyStudents/surveyStudents';
import { teachers, initialTeachersState } from './teachers/teachers';
import { userProfile, initialUserProfileState } from './userProfile/userProfile';
import { userSession, initialUserSessionState } from './userSession/userSession';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promise));

const initialStoreState = Map({
  userSession: initialUserSessionState,
  userProfile: initialUserProfileState,
  surveys: initialSurveysState,
  questions: initialQuestionsState,
  admins: initialAdminsState,
  teachers: initialTeachersState,
  students: initialStudentsState,
  survey: initialSurveyState,
  surveyStudents: initialSurveyStudentsState
});

const store = createStore(
  combineReducers({
    form: formReducer,
    userSession,
    userProfile,
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

export default store;
