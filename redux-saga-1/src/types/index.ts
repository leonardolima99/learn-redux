export type ActionType<T> = {
  type: string;
  payload?: T;
};

export type UserType = {
  name?: string;
  avatar_url?: string;
};

export type ErrorType = {
  message: string;
};
