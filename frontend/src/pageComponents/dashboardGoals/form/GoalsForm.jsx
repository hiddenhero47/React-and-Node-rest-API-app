import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { FormWrapper, GoalForm, FormControl } from "./GoalsForm.style";
import { TriangleWarning as Warning } from "../../../components/icons/warningSings";
import { GoalFormSchema } from "./validationSchema";
import { createGoal, setNeutral, editGoal } from "../../../features/goals/goalsSlice";
import { toast } from "react-toastify";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";

function GoalsForm({ setSubPage, setCurrentGoal, currentGoal }) {
  const dispatch = useDispatch();

  const OPTIONS = {
    GOALS: "Goal",
    GOALS_FORM: "GoalForm",
    DELETE: "Delete",
  };

  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    console.log(goals);

    if (isSuccess && goals.length > 0) {
      toast.success("Successful");
      dispatch(setNeutral());
      setSubPage(OPTIONS.GOALS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goals, isError, isSuccess, message]);

  const [state, setState] = useState({});

  useEffect(() => {
    if (Object.keys(currentGoal).length !== 0) {
      setState(currentGoal);
      setCurrentGoal({});
    }
  }, [setCurrentGoal, currentGoal]);

  const onSubmit = async (values) => {
    if (Object.keys(state).length !== 0) {
      const id = state._id;
      dispatch(editGoal({goalData: values, id}));
    } else {
      dispatch(createGoal(values));
    }
  };

  const {
    // setErrors,
    // setTouched,
    // setFieldValue,
    setValues,
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: GoalFormSchema,
    onSubmit,
  });

  useEffect(() => {
    if (Object.keys(state).length !== 0) {
      const oldGoal = { text: state?.text };

      setValues(oldGoal);
    }
  }, [state, setValues]);

  const { text } = values;

  return (
    <FormWrapper>
      <h1 className="title">
        {Object.keys(state).length !== 0 ? "Edit goal" : "Create new goal"}
      </h1>
      <GoalForm onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="text" className="myLabel">
            text*
          </label>

          <input
            type="text"
            name="text"
            id="text"
            className={
              touched.text && errors.text ? "myInput isError" : "myInput"
            }
            onBlur={handleBlur}
            value={text || ""}
            placeholder=" Enter text"
            onChange={handleChange}
          />
          {touched.text && errors.text ? (
            <p className="error">
              <Warning width={12} height={12} color="red" /> {errors.text}
            </p>
          ) : (
            ""
          )}
        </FormControl>

        <button disabled={isLoading} type="submit" className="submitBtn">
          {isLoading ? (
            <span className="appLoader">
              <BubbleSlide />
            </span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </GoalForm>
    </FormWrapper>
  );
}

GoalsForm.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentGoal: PropTypes.func,
  currentGoal: PropTypes.object,
};

export default GoalsForm;
