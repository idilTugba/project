import { signout } from "@/lib/redux/reducers/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function SignOut() {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signout());
    sessionStorage.removeItem("user");
    console.log(sessionStorage.getItem("user"));
  };
  return (
    <button
      className="button py-10 px-10 -purple-1 text-white ml-30 xl:ml-20"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
