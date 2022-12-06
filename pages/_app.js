import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "../styles/globals.scss";
import "./src/components/chart/chart.scss";
import DisplayProfile from "./src/components/table/DisplayProfile";
import DisplayUsers from "./src/components/table/DisplayUsers";
import AddCoinForm from "./src/pages/forms/AddCoinForm";
import AdsForm from "./src/pages/forms/AdsForm";
import EditProfileForm from "./src/pages/forms/EditProfileForm";
import LoginForm from "./src/pages/forms/LoginForm";
import SignUpForm from "./src/pages/forms/SignUpForm";
import Home from "./src/pages/home/Home";
import UserHome from "./src/pages/home/UserHome";
import List from "./src/pages/list/List";
import UserAdList from "./src/pages/list/UserAdList";
import UserList from "./src/pages/list/UserList";
const isBrowser = typeof window !== "undefined";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(pageProps);

    console.log(Component);
  }, []);

  return (
    <>
      {isBrowser && (
        <BrowserRouter>
          <Routes>
            <Route path="/admin" index element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/userhome" element={<UserHome />} />

            <Route path="/coins" element={<List />} />
            <Route path="/usercoins" element={<UserList />} />
            <Route path="/ads" element={<UserAdList />} />
            <Route path="/users" element={<DisplayUsers />} />
            <Route path="/addcoin" element={<AddCoinForm />} />
            <Route path="/addadvertisment" element={<AdsForm />} />
            <Route path="/profile" element={<DisplayProfile />} />
            <Route path="/editprofile" element={<EditProfileForm />} />
          </Routes>
          <Component {...pageProps} />
        </BrowserRouter>
      )}
    </>
  );
}

export default MyApp;
