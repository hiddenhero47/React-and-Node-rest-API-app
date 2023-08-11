import React, { useState } from "react";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";

function DashboardUserGoals() {
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
      <div className="test">DashboardUserGoals</div>
    </DashboardLayout>
  );
}

export default DashboardUserGoals;
