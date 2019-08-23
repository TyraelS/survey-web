import { List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

export const nameAction = createAction('NAME_ACTION');

export const initialNameState = List();

export const name = handleActions(
  {
    [nameAction]: state => state
  },
  initialNameState
);
