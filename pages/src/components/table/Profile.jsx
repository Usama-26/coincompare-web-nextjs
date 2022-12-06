import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const updateProfile = () => {
    navigate("/editprofile", { state: { user: user } });
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);
  return (
    <div>
      <div class="flex items-center h-screen w-full justify-center">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={`http://localhost:1337${user?.Image?.url}`}
                alt="John Doe"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {user.username}
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      Country
                    </td>
                    <td class="px-2 py-2">{user.country}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{user.contact}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{user.email}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3">
                <div
                  onClick={updateProfile}
                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                >
                  Edit Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
