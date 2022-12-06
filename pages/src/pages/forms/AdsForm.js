import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdsForm = () => {
  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const adFormSubmitHandler = async (event) => {
    event.preventDefault();
    let file = new FormData();
    file.append("files", image);
    axios.post("http://localhost:1337/api/upload", file).then(async (res) => {
      const { data } = await axios.post(
        "http://localhost:1337/api/ads",
        {
          data: {
            Title: `${title}`,
            Website: `${website}`,
            Description: `${description}`,
            Image: res.data[0].id,
          },
        },

        {
          headers: {
            Authorization:
              "Bearer 680daa276517f446e5310784cf17aefc01785a17019a970d6fd64a8c790e863b83254553a8499cc9ee0f20afc25c0ee745a637f7ef113a4ee0e112e15451c16b0bfd7451082f131eecfd3add86e86e9edc8ff23c831411448b24e4e42b75428a09e76d2bdcacacffc828e7347224001d8298cf1d2a7abac8ebef46205a4957fb",
          },
        }
      );
      navigate("/ads");
    });
  };
  return (
    <form
      class="text-gray-600 body-font relative"
      onSubmit={adFormSubmitHandler}
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ad Form{" "}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {" "}
            Fill the form with your Ad Details
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Website
                </label>
                <input
                  type="text"
                  id="email"
                  name="website"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                  required
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Coin Image
                </label>

                <input
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdsForm;
