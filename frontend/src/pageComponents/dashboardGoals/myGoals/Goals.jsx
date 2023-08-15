import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MyGoals, Container, Grid } from "./Goals.style";
import PropTypes from "prop-types";
import Candle from "../../../components/loaders/candles/Candle";
import {
  getGoals,
  reset,
  setNeutral,
} from "../../../features/goals/goalsSlice";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Goals({ setSubPage, setCurrentGoal, currentGoal }) {
  const dispatch = useDispatch();

  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  useEffect(() => {
    if (isSuccess && goals.length > 0) {
      dispatch(setNeutral());
    }
  }, [dispatch, goals.length, isSuccess]);

  const OPTIONS = {
    GOALS: "Goal",
    GOALS_FORM: "GoalForm",
    DELETE: "Delete",
  };

  const handelEdit = (data) => {
    setCurrentGoal(data);
    setSubPage(OPTIONS.GOALS_FORM);
  };

  const handelDelete = (data) => {
    setCurrentGoal(data);
    setSubPage(OPTIONS.DELETE);
  };

  return (
    <MyGoals>
      <h1>Goals</h1>
      <div className="user_goals">
        {isLoading ? (
          <div className="AppLoader">
            <Candle />
          </div>
        ) : (
          <Container>
            <Grid>
              {goals.map((goal, index) => (
                <div className="content" id={goal?._id} key={index}>
                  <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
                  <div className="Textbox">
                    <p>{goal?.text}</p>
                  </div>
                  <div className="btnBox">
                    <span onClick={() => handelEdit(goal)}><FaEdit/></span>
                    <span onClick={() => handelDelete(goal)}><MdDeleteSweep/></span>
                  </div>
                </div>
              ))}
            </Grid>
          </Container>
        )}
      </div>
    </MyGoals>
  );
}

Goals.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentGoal: PropTypes.func,
  currentGoal: PropTypes.object,
};

export default Goals;
