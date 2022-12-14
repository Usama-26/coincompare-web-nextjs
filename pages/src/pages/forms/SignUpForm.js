import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [imageName, setImageName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const navigate = useNavigate();
  const userSignUpHandler = (event) => {
    event.preventDefault();
    console.log("abc");
    let file = new FormData();
    file.append("files", image);
    if (password === confirmPassword) {
      axios
        .post("http://localhost:1337/api/upload", file)
        .then((res) => {
          axios
            .post("http://localhost:1337/api/auth/local/register", {
              username: `${userName}`,
              email: `${email}`,
              password: `${password}`,
              country: `${country}`,
              contact: `${contact}`,
              Image: res.data[0].id,
            })
            .then((response) => {
              navigate("/login");
              // Handle success.
              console.log("Well done!");
              console.log("User profile", response.data.user);
              console.log("User token", response.data.jwt);
            })
            .catch((error) => {
              // Handle error.
              console.log("An error occurred:", error.response);
            });
        })
        .catch((err) => console.log(err));
    } else {
      alert("password does not match ");
    }
  };
  return (
    <>
      <div id="#Login" className="container w-full max-w-sm my-20 mx-auto">
        <div class="bg-blue-gray-700 px-6 py-8 text-black w-full rounded-lg shadow-sm">
          <h1 class="mb-8 text-3xl text-center capitalize text-blue-gray-100 font-bold">Sign up</h1>

          <input
            type="text"
            className="block border border-gray-100/50 w-full p-3 rounded mb-4 bg-blue-gray-700/50 text-blue-gray-100"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            className="block  border border-gray-100/50 w-full p-3 rounded mb-4 bg-blue-gray-700/50 text-blue-gray-100"
            name="username"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />

          {/* <div className="flex gap-6 w-full">
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div> */}

          {/* <input
            class="block border border-grey-light w-full p-3 rounded mb-4"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="img"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setImageName(e.target.value);
            }}
            value={imageName}
          /> */}

          {/* <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="country"
            placeholder="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="contact"
            placeholder="contact"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          /> */}

          <button
            type="submit"
            class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded-full text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
