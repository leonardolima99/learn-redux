import { useEffect, useState } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "../../redux";
import { UserState } from "../../redux/reducers/user";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const User = () => {
  const userState: UserState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const handleUser = () => {
    dispatch(getUserRequest(name));
  };

  useEffect(() => {
    console.log(userState);
  }, [userState]);
  return (
    <>
      {userState.loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <h1>User Page {userState.error?.message}</h1>
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
      )}
    </>
  );
};
