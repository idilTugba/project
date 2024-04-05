import Socials from "@/component/common/Social";
import footerStyle from "./footer.module.scss";
import React from "react";
import Links from "../component/links";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="py-30 border-top-light">
          <div className="row items-center justify-between">
            <div className="col-auto">
              <div className="text-13 lh-1">
                © {new Date().getFullYear()} NABU. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center flex-wrap x-gap-20">
                  <Links />
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className={`${footerStyle.socials}`}>
                <div className={`${footerStyle.socials__title}`}>
                  {/* Bizi takip et */}
                </div>
                <div className={`${footerStyle.socials__list}`}>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
