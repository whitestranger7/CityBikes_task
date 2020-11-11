import { ActionType } from 'typesafe-actions';

import * as networkActions from './networkActions';

export type RootAction = ActionType<typeof networkActions>;
