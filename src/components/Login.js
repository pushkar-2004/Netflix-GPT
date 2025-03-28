import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validations";

function Login() {
  const [inup, setInup] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setInup(!inup);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h2 className="mx-2 my-4 text-2xl font-bold">
          {inup ? "Sign In" : "Sign Up"}
        </h2>
        {!inup && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mx-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="p-4 mx-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mx-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg mx-2 my-4">{errorMessage}</p>
        <button
          className="p-4 mx-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {inup ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer mx-2 my-4">
          {inup
            ? "New to Netflix ? Sign Up Now"
            : "Already have an account ? Sign In now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
