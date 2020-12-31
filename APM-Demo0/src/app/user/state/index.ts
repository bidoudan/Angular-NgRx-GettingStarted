import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
    user: UserState
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getUser = createSelector(
    getUserFeatureState,
    state => state.user
)