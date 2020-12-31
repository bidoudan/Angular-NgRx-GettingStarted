import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import { UserPageActions } from './actions';

export interface UserState {
    maskUserName: boolean,
    user: User
};

const initialUserState: UserState = {
    maskUserName: false,
    user: null
};

export const userReducer = createReducer(
    initialUserState,
    on(UserPageActions.maskUserName, (state): UserState  => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);