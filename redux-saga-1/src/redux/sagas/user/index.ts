import { call, put, all, takeLatest } from "redux-saga/effects";
import { ErrorType, UserType } from "../../../types";
import { getUserFailure, getUserSuccess } from "../../actions";
import * as types from "../../types";

let userApi: UserType;
const userRequest = async (name: string) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}`);
    userApi = await request.json();

    if (!request.ok) throw userApi;
  } catch (e) {
    throw e;
  }
};

export function* userData(action: { type: string; payload: string }) {
  try {
    yield call(userRequest, action.payload);
    yield put(getUserSuccess(userApi));
  } catch (e) {
    const err = e as ErrorType;
    yield put(getUserFailure(err));
  }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);
