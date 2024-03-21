import React from "react";

import Preloader from "@/component/common/PreLoader";
// import FooterOne from '@/components/layout/footers/FooterOne'
import LoginForm from "@/component/forms/LoginForm";
import Style from "./styles.module.css";

export const metadata = {
  title:
    "Sign up || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <div className={`${Style.mainContent} main-content`}>
      <Preloader />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="form-page js-mouse-move-container">
          <LoginForm />
        </section>
      </div>
    </div>
  );
}
