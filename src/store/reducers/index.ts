import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { networksReducer as networks } from './networksReducer';

export const rootReducer = combineReducers({ networks });

export type RootState = StateType<typeof rootReducer>;
