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
  return <button onClick={handleSignOut}>Sign Out</button>;
}
