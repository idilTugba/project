import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="masthead -type-4">
      <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__content">
              <h1 className="masthead__title">
                Dil Becerini <span className="text-purple-1 underline">AI</span>{" "}
                ile <br></br> Bir Üst Seviyeye Taşı
              </h1>
              <p className="masthead__text pt-15">
                Şimdiye kadar olduğundan çok daha hızlı ilerlemen için incelikle
                eğitilmiş
                <br className="md:d-none" />
                yapay zekamız ile ingilizce öğrenmek artık Easy Peasy
              </p>
              <div className="masthead__button row x-gap-20 y-gap-20 pt-30">
                <div className="col-auto">
                  <Link
                    href="/signup"
                    className="button -md -purple-1 -rounded text-white"
                  >
                    Hadi Dene
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    href="/courses-list-1"
                    className="button -md -outline-dark-1 -rounded text-dark-1"
                  >
                    Nasıl Çalışıyor ?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="masthead__image">
              <Image
                width={700}
                height={410}
                src="/img/home/bg.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
