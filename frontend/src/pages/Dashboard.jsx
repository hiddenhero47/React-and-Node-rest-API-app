import React, { useState } from "react";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";
import MyLooby from "../pageComponents/dashboard/looby";

function Dashboard() {
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
