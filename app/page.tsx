"use client";
import { useEffect, useState } from "react";

import Footer from "@/component/layout/footer/Footer";
import Header from "@/component/layout/header/Header";
import HomePage from "@/component/homes/Home";
import { loginSuccess } from "@/lib/redux/reducers/userSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(false);
  const [messageOpen, setMessageOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth < 990) {
      setIsSidebarClosed(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setIsSidebarClosed(true);
      }
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // dispatch(loginSuccess(sessionStorage.getItem("user")));
  });

  return (
    <main>
      <Header />
      <HomePage />

      <Footer />
    </main>
  );
}
