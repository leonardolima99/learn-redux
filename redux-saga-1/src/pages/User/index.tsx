import { useEffect, useState } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "../../redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const User = () => {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const handleUser = () => {
    dispatch(getUserRequest(name));
  };

  console.log(userState);
  return (
    <>
      <h1>User Page {userState.user.name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUser();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={!name}>
          Search
        </button>
      </form>
    </>
  );
};
