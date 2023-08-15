import React, { useEffect, useState } from "react";
import { DeleteMe } from "./DeleteGoal.style";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { TriangleWarning as Warning } from "../../../components/icons/warningSings";
import { toast } from "react-toastify";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";
import { deleteGoal, setNeutral } from "../../../features/goals/goalsSlice";

function DeleteGoal({ setSubPage, setCurrentGoal, currentGoal }) {
  const dispatch = useDispatch();

  const OPTIONS = {
    GOALS: "Goal",
    GOALS_FORM: "GoalForm",
    DELETE: "Delete",
  };

  const [state, setState] = useState({});

  useEffect(() => {
    if (Object.keys(currentGoal).length !== 0) {
      setState(currentGoal);
      setCurrentGoal({});
    }
  }, [setCurrentGoal, currentGoal]);

  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Successful");
      dispatch(setNeutral());
      setSubPage(OPTIONS.GOALS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goals, isError, isSuccess, message]);

  const handelDelete = () => {
    const goalId = state._id;
    dispatch(deleteGoal(goalId));
  };

  return (
    <DeleteMe>
      {Object.keys(state).length === 0 ? (
        <div className="noData">
          <p className="errorText">
            <i><Warning width={50} height={50} /></i>  No current data to delete
          </p>
        </div>
      ) : (
        <div className="deletCard">
          <p>Warning are you sure you want to delete this goal</p>

          <div>{new Date(state.createdAt).toLocaleString("en-US")}</div>

          <p>{state._id}</p>

          <div className="delete">
            <button
              disabled={isLoading}
              onClick={handelDelete}
              type="button"
              className="submitBtn"
            >
              {isLoading ? (
                <span className="appLoader">
                  <BubbleSlide />
                </span>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </div>
      )}
    </DeleteMe>
  );
}

DeleteGoal.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentGoal: PropTypes.func,
  currentGoal: PropTypes.object,
};

export default DeleteGoal;
