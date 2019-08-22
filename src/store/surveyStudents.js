import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialSurveyStudentsState = List();

export const surveyStudents = handleActions({}, initialSurveyStudentsState);
