"use client";

import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import Input from "./elements/Input";
import Button from "./elements/Button";
import { loginSuccess } from "@/lib/redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/redux/Hooks";

interface formType {
  email: string;
  password: string;
}

const loginValSchema = yup
  .object({
    email: yup.string().email("düzgün email gir").required("Şifre gerekli"),
    password: yup
      .string()
      .required("Şifre gerekli")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .matches(/[a-zA-Z]/, "Paralo en az bir harf içermelidir")
      .matches(/\d/, "Paralo en az bir numara içermelidir"),
  })
  .required();

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: yupResolver(loginValSchema),
  });
  const onSubmit: SubmitHandler<formType> = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { message, user } = await res.json();

      if (!user) {
        console.log("Bağlantı başarısız");
      } else {
        console.log("Dispatching login success:", user);
        dispatch(loginSuccess(user));
        sessionStorage.setItem("user", JSON.stringify(user));
        alert(
          `${message} , Hoşgeldin ${user.userName} Anasayfa'ya yönlendiriliyorsun!`
        );

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Login</h3>
              <p className="mt-10">
                Don&apos;t have an account yet?
                <Link href="/signup" className="text-purple-1">
                  Sign up for free
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-12">
                  <Input
                    register={register}
                    errors={errors}
                    type="text"
                    name="email"
                    placeholder="Username Or Email"
                  />
                </div>
                <div className="col-12">
                  <Input
                    register={register}
                    errors={errors}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12">
                  <Button type="submit" name="submit" Children={`LOGIN`} />
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
