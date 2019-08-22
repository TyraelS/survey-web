import { List } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialSurveysState = List();

export const surveys = handleActions({}, initialSurveysState);
