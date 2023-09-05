import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";
import Users from "../pageComponents/dashboardUsers/myUsers/Users";

function DashboardUsers() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [subPage, setSubPage] = useState("apple");

  const options = [];

  return (
    <DashboardLayout
      options={options}
      subPage={subPage}
      setSubPage={setSubPage}
    >
      <Users />
    </DashboardLayout>
  );
}

export default DashboardUsers;
