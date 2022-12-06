import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/CoinTable";
import { useEffect } from "react";
import UserTable from "../../components/table/UserTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user.email !== "adeel.saeed158@gmail.com") {
      navigate("/login");
    }
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Coins </div>
          <Table />
          <br />
          <br />
          <br />
          <div className="listTitle"> Users </div>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
