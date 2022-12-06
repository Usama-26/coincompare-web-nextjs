import React, { useState, useEffect } from "react";

export default function UserTable() {
  const [userData, setUserData] = useState("");

  const getUserData = async (req, res) => {
    const fetchResponse = await fetch("http://localhost:1337/api/users");
    const coinJSON = await fetchResponse.json();
    setUserData(coinJSON);
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log(userData);
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Country
            </th>
            <th scope="col" class="py-3 px-6">
              Contact
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map((curElem, index) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index + 1}>
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {curElem.email}
                  </th>
                  <td class="py-4 px-6">{curElem.username}</td>
                  <td class="py-4 px-6">{curElem.country}</td>
                  <td class="py-4 px-6">{curElem.contact}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
