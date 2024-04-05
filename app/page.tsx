"use client";
import { useEffect, useState } from "react";

import Footer from "@/component/layout/footer/Footer";
import Header from "@/component/layout/header/Header";

export default function Home() {
  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(false);
  const [messageOpen, setMessageOpen] = useState<boolean>(false);

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

  return (
    <main>
      <Header />
      <div style={{ marginBottom: "330px" }}></div>
      <Footer />
    </main>
  );
}
