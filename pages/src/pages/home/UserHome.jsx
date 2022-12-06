import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/CoinTable";
import { useEffect } from "react";
import UserSidebar from "../../components/sidebar/UserSidebar";
import UserWidget from "../../components/widget/UserWidget";
import UserCoinTable from "../../components/table/UserCoinTable";
import UserAdsTable from "../../components/table/UserAdsTable";
import SignUpForm from "../forms/SignUpForm";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user.email === "adeel.saeed158@gmail.com") {
      navigate("/login");
    }
  }, []);
  return (
    <div className="home">
      <UserSidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <UserWidget type="coins" />
          <UserWidget type="ads" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <UserCoinTable />
          <UserAdsTable />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
