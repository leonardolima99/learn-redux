import { ActionType, ErrorType, UserType } from "../../../types";
import * as types from "../../types";

interface UserState {
  user?: UserType;
  loading?: boolean;
  error?: ErrorType;
}

const initialState: UserState = {
  user: {
    avatar_url: "",
    name: "",
  },
  loading: false,
  error: {
    message: "",
  },
};

export const userReducer = (
  state = initialState,
  action: ActionType<UserType>
) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: {
          message: "",
        },
      };

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: {
          message: "",
        },
      };

    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      break;
  }
};
