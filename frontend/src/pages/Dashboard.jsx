import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";
import MyLooby from "../pageComponents/dashboard/looby";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [subPage, setSubPage] = useState("apple");

  const options = [
    {
      name: "apple",
      keyword: "apple",
    },
    {
      name: "fish",
      keyword: "fish",
    },
    {
      name: "cake",
      keyword: "cake",
    },
    {
      name: "mango",
      keyword: "mango",
    },
  ];

  return (
    <DashboardLayout
      options={options}
      subPage={subPage}
      setSubPage={setSubPage}
    >
      <MyLooby />
    </DashboardLayout>
  );
}

export default Dashboard;
