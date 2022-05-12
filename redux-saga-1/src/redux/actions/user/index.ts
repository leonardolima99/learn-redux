import { ActionType, ErrorType, UserType } from "..";
import * as types from "../../types";

export function getUserRequest(name: string): ActionType<string> {
  return {
    type: types.GET_USER_REQUEST,
    payload: name,
  };
}

export function getUserSuccess(user: UserType): ActionType<UserType> {
  return {
    type: types.GET_USER_SUCCESS,
    payload: user,
  };
}

export function getUserFailure(error: ErrorType): ActionType<ErrorType> {
  return {
    type: types.GET_USER_FAILURE,
    payload: error,
  };
}
