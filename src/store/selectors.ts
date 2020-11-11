import { createSelector } from 'reselect';
import { RootState } from './reducers/index';

export const getNetworks = createSelector(
    [(state: RootState) => state.networks],
    (items) => items
);
