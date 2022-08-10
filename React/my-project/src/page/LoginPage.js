import React from "react";

import { Link } from "react-router-dom";

import Header from "./header";
const LoginPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-main-green  flex justify-center items-center ">
        <div className=" w-80 rounded-md bg-white drop-shadow-lg flex-col content-center items-center justify-content-center justify-items-center">
          <br />

          <Link to="/index" activeClassName="active">
            <img
              className="w-48 max-w-full  align-middle mx-auto  "
              src="../img/logoMEDCMUen-1280x227.png"
              alt="med"
            />
          </Link>

          <form
            action="/menu"
            className="  align-middle gap-1 text-l py-4 text-left mx-5   "
          >
            <label htmlFor="username">username </label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="rounded-md w-60 bg-gray-light "
            />
            <br />
            <br />
            <label htmlFor="upassword">password </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******************"
              className=" rounded-md w-60 bg-gray-light"
            />{" "}
            <div className="text-center my-10">
                <a href="/menu" >
              <button
                className="inline-block
                  px-4 py-1 rounded-lg
                  
                  bg-main-green  
                "
              >
                Sign in
              </button>
            </a>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
