import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { User } from "../user";
import * as UserActions from '../state/user.action';
export interface State extends AppState.State {
    user: UserState
}

export interface UserState {
    maskUserName: boolean,
    user: User
};

const initialUserState: UserState = {
    maskUserName: false,
    user: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getUser = createSelector(
    getUserFeatureState,
    state => state.user
)

export const userReducer = createReducer(
    initialUserState,
    on(UserActions.maskUserName, (state): UserState  => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);