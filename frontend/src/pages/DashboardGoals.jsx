import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";
import Goals from "../pageComponents/dashboardGoals/myGoals/Goals";
import GoalsForm from "../pageComponents/dashboardGoals/form/GoalsForm";
import DeleteGoal from "../pageComponents/dashboardGoals/deleteGoal/DeleteGoal";

function DashboardGoals() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [subPage, setSubPage] = useState("Goal");

  const [currentGoal, setCurrentGoal] = useState({});

  const changeSubPage = (text) => {
    setSubPage(text);
  };

  const options = [
    {
      name: "Goal",
      keyword: "Goal",
    },
    {
      name: "Goal form",
      keyword: "GoalForm",
    },
    {
      name: "Delete",
      keyword: "Delete",
    },
  ];

  return (
    <DashboardLayout
      options={options}
      subPage={subPage}
      setSubPage={setSubPage}
    >
      <>
        {subPage === "Goal" && (
          <Goals
            currentGoal={currentGoal}
            setCurrentGoal={setCurrentGoal}
            setSubPage={changeSubPage}
          />
        )}

        {subPage === "GoalForm" && (
          <GoalsForm
            currentGoal={currentGoal}
            setCurrentGoal={setCurrentGoal}
            setSubPage={changeSubPage}
          />
        )}

        {subPage === "Delete" && (
          <DeleteGoal
            currentGoal={currentGoal}
            setCurrentGoal={setCurrentGoal}
            setSubPage={changeSubPage}
          />
        )}
      </>
    </DashboardLayout>
  );
}

export default DashboardGoals;
