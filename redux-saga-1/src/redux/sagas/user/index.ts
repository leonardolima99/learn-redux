import { call, put, all, takeLatest } from "redux-saga/effects";
import { UserType } from "../../../types";
import { getUserFailure, getUserSuccess } from "../../actions";
import * as types from "../../types";

let userApi: UserType;
const userRequest = async (name: string) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}`);
    userApi = await request.json();
    return true;
  } catch (e) {
    return false;
  }
};

export function* userData(action: { type: string; payload: string }) {
  try {
    yield call(userRequest, action.payload);
    yield put(getUserSuccess(userApi));
  } catch (e) {
    yield put(getUserFailure({ message: "Falha ao requisitar." }));
  }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);
