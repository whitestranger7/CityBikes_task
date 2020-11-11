import { INetworks } from '../../interfaces/INetworks';

import { createReducer } from 'typesafe-actions';
import { RootAction } from '../actions/index';

import {
  getNetworksAction,
  updateSelectedAction,
} from '../actions/networkActions';

const initialState = {
  items: [],
  selected: {
    index: 0,
    id: '',
  },
};

export const networksReducer = createReducer<INetworks, RootAction>(
  initialState
)
  .handleAction(getNetworksAction, (state, { payload }) => ({
    items: payload.networks,
    selected: {
      index: 0,
      id: payload.networks[0].id,
    },
  }))
  .handleAction(updateSelectedAction, (state, { payload }) => ({
    ...state,
    selected: {
      index: payload.index,
      id: payload.id,
    },
  }));
