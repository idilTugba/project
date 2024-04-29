"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import Input from "./elements/Input";
import Button from "./elements/Button";

import { loginSuccess } from "@/lib/redux/reducers/userSlice";

enum genderEnum {
  male = "male",
  famele = "famale",
  other = "other",
}

interface registerFormType {
  email: string;
  firstName: string;
  lastName: string;
  // username: string;
  birthYear: string;
  // gender: genderEnum;
  password: string;
}

const registerValSchema = yup
  .object({
    email: yup.string().email("düzgün email gir").required("Email gerekli"),
    firstName: yup
      .string()
      .min(2, "En az 2 karakter içermelidir")
      .required("Ad gerekli"),
    lastName: yup
      .string()
      .min(2, "En az 2 karakter içermelidir")
      .required("Soyad gerekli"),
    birthYear: yup.string().required("Doğum yılı gerekli"),
    // gender: yup.string().required("Cinsiyet gereklidir"),
    password: yup
      .string()
      .required("Şifre gerekli")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .matches(/[a-zA-Z]/, "Paralo en az bir harf içermelidir")
      .matches(/\d/, "Paralo en az bir numara içermelidir"),
  })
  .required();

export default function SignUpForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormType>({ resolver: yupResolver(registerValSchema) });

  const onSubmit: SubmitHandler<registerFormType> = async (data) => {
    console.log(data);
    try {
      const res = await fetch(`${process.env.API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { user } = await res.json();

      if (!user) {
        console.log("Bağlantı başarısız");
      } else {
        dispatch(loginSuccess(user));
        sessionStorage.setItem("user", user);
        alert(
          `Hoşgeldin ${
            data.firstName + " " + data.lastName
          }, Ana sayfaya yönlendiriliyorsunuz.`
        );

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-page__content">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Sign Up</h3>
              <p className="mt-10">
                Already have an account?
                <Link href="/login" className="text-purple-1">
                  Log in
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-lg-6">
                  <Input
                    errors={errors}
                    register={register}
                    type="text"
                    name="firstName"
                    placeholder="Ad"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    errors={errors}
                    register={register}
                    type="text"
                    name="lastName"
                    placeholder="Soyad"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    errors={errors}
                    register={register}
                    type="text"
                    name="email"
                    placeholder="E-Posta"
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Doğum Yılı
                  </label>
                  <select {...register("birthYear")} name="birthYear">
                    <option value="Doğum Yılı">Doğum Yılı</option>
                    <option value="1990">1990</option>
                    <option value="2000">2000</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                  </select>

                  {errors.birthYear && <p>{errors.birthYear.message}</p>}
                </div>
                <div className="col-lg-6">
                  <Input
                    errors={errors}
                    register={register}
                    type="password"
                    name="password"
                    placeholder="Şifre"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    errors={errors}
                    register={register}
                    type="password"
                    name="password"
                    placeholder="Şifre Tekrar"
                  />
                </div>
                <div className="col-12">
                  <Button type="submit" name="submit" Children={`Register`} />
                </div>
              </form>

              <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or sign with
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div className="col-xs-12 col-6">
                  <button className="button col-12 -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Facebook
                  </button>
                </div>
                <div className="col-xs-12 col-6">
                  <button className="button col-12 -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
