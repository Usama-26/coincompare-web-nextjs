import React, { useState } from "react";
import axios from "axios";
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
    <form class="bg-grey-lighter min-h-screen flex flex-col" onSubmit={userSignUpHandler}>
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />

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

          <input
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
          />

          <input
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
          />

          <button
            type="submit"
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a>{" "}
            and
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a class="no-underline border-b border-blue text-blue" href="../login/">
            Log in
          </a>
          .
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
