import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, SetisSignIn] = useState(true);

  const toggelPage = () => {
    SetisSignIn(!isSignIn);
    console.log(isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="coverPage"
        />
      </div>

      <form className="rounded-lg absolute z-20 w-2/6 p-12 backdrop-brightness-50 bg-black/70 items-center mt-40 mx-auto left-0 right-0">
        <h1 className="mx-6 text-white text-3xl mb-6 font-semibold px-2">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            className=" mx-6 p-4 m-2 text-white w-10/12 bg-[#333333] rounded-md "
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className=" mx-6 p-4 m-2 text-white w-10/12 bg-[#333333] rounded-md "
          type="text"
          placeholder="Email Adress"
        />
        <input
          className=" mx-6 p-4 m-2 w-10/12 bg-[#333333] rounded-md bg-net-gray "
          type="password"
          placeholder="Password"
        />
        <button
          className="  mx-6 bg-[#e50914] w-10/12 p-4 m-2 font-semibold rounded-md text-white"
          type="submit"
        >
          {" "}
          {isSignIn ? "Get Started " : "Sign In"}
        </button>
        <p className="mx-6 p-4 text-gray-500">
          {isSignIn?"Already a User? ":"New to Netflix? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => toggelPage()}
          >
            {isSignIn?"Sign in":"Sign up now"}.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
