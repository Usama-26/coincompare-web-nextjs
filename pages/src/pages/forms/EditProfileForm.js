import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const EditProfileForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("asdas");
  useEffect(() => {
    const user = location.state.user;
    setUserName(user.username);
    setEmail(user.email);
    setCountry(user.country);
    setContact(user.contact);
  }, []);
  const handleUpdate = (e) => {
    let file = new FormData();
    file.append("files", image);
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/upload", file)
      .then(async (res) => {
        try {
          const { data } = await axios.put(
            `http://localhost:1337/api/users/${location.state.user.id}`,
            {
              username: userName,
              email: email,
              country: country,
              contact: contact,
              Image: res.data[0].id,
            }
          );
          axios
            .get(`http://localhost:1337/api/users/${data.id}?populate=*`)
            .then((res) => {
              console.log(res);
              localStorage.setItem("loggedInUser", JSON.stringify(res.data));
              navigate("/profile");
            })
            .catch((err) => console.log(err));
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        class="bg-grey-lighter min-h-screen flex flex-col"
      >
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">
              Fill the form to Edit Profile
            </h1>

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
            <input
              class="block border border-grey-light w-full p-3 rounded mb-4"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              name="img"
              required
              onChange={(e) => {
                setImage(e.target.files[0]);
                setImageName(e.target.value);
              }}
            />

            <button
              type="submit"
              class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
