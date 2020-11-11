import { createAction } from 'typesafe-actions';
import { FETCH_NETWORKS, UPDATE_SELECTED_ACTION } from '../types';

export const getNetworksAction = createAction(
  FETCH_NETWORKS,
  (networks: any[]) => ({
    networks,
  })
)();

export const updateSelectedAction = createAction(
  UPDATE_SELECTED_ACTION,
  (index: number, id: string) => ({
    index: index,
    id: id,
  })
)();
