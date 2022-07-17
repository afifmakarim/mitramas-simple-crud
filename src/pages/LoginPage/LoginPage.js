import React from "react";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import SecondaryTitle from "../../components/SecondaryTitle/SecondaryTitle";

export default function LoginPage() {
  return (
    <div className="container d-flex align-items-center justify-content-between wrap">
      <div className="login-section p-5 m-4 d-flex flex-column justify-content-center w-75">
        <HeadTitle text={"Welcome back"} />
        <SecondaryTitle text={"Welcome back! Please enter your details."} />
        <LoginForm />
      </div>
      <div className="bg-section d-flex justify-content-end">
        <img className="bg" src="https://picsum.photos/600" alt="" />
      </div>
    </div>
  );
}
