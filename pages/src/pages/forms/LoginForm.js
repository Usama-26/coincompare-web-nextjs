import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SendProfileData from "../../components/table/SendProfileData";
import Profile from "../../components/table/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("yes");
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  const userLoginHandler = (event) => {
    event.preventDefault();
    console.log("abc");
    navigate("/signup");

    // axios
    //   .post("http://localhost:1337/api/auth/local?populate=*", {
    //     identifier: `${email}`,
    //     password: `${password}`,
    //   })
    //   .then((response) => {
    //     // Handle success.
    //     if (selected == "yes" && email == "adeel.saeed158@gmail.com") {
    //       navigate("/admin");
    //     } else if (selected == "yes" && email != "adeel.saeed158@gmail.com") {
    //       alert("Incorrect login details");
    //     } else {
    //       navigate("/userhome");
    //     }
    //     console.log("Well done!");

    //     axios
    //       .get(`http://localhost:1337/api/users/${response.data.user.id}?populate=*`)
    //       .then((res) => {
    //         console.log(res);
    //         localStorage.setItem("loggedInUser", JSON.stringify(res.data));
    //       })
    //       .catch((err) => console.log(err));
    //   })

    //   .catch((error) => {
    //     alert("Incorrect email or password");
    //     // Handle error.
    //     console.log("An error occurred:", error.response);
    //   });
  };

  return (
    <div>
      <body class="bg-gray-10 ">
        <form class="flex justify-center h-screen w-screen items-center" onSubmit={userLoginHandler}>
          <div class="w-full md:w-1/2 flex flex-col items-center ">
            <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
            <div class="w-3/4 mb-6">
              <input
                type="email"
                name="email"
                id="email"
                class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div class="w-3/4 mb-6">
              <input
                type="password"
                name="password"
                id="password"
                class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex flex-column ">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  checked={selected === "yes"}
                  value="yes"
                  name="default-radio"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-radio-1" class="ml-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Admin
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked={selected == "no"}
                  id="default-radio-2"
                  type="radio"
                  value="no"
                  onChange={handleChange}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  user
                </label>
              </div>
            </div>
            <div class="w-3/4 flex flex-row justify-between">
              <div class=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="" class=" w-4 h-4  " />
                <label for="" class="text-sm text-slate-400">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" class="text-sm text-slate-400 hover:text-blue-500">
                  Forgot?
                </a>
              </div>
            </div>

            <div class="w-3/4 mt-4">
              <button type="submit" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">
                {" "}
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </body>
    </div>
  );
};

export default LoginForm;
