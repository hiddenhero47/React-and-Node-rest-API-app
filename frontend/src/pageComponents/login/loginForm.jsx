import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyForm, FormControl } from "./loginForm.style";
import { loginFormSchema } from "./validation";
import { TriangleWarning as Warning } from "../../components/icons/warningSings";
import { login, reset } from "../../features/auth/authSlice";

function LoginForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      toast.success("Successful");
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = async (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    dispatch(login (userData));
  };

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  const { email, password } = values;

  return (
    <MyForm onSubmit={handleSubmit}>
      <FormControl>
        <label htmlFor="email" className="myLabel">
          Email*
        </label>

        <input
          type="email"
          name="email"
          id="email"
          className={
            touched.email && errors.email ? "myInput isError" : "myInput"
          }
          onBlur={handleBlur}
          value={email || ""}
          placeholder=" Enter your email"
          onChange={handleChange}
        />
        {touched.email && errors.email ? (
          <p className="error"><Warning width={12} height={12} color="red"/> {errors.email}</p>
        ) : (
          ""
        )}
      </FormControl>

      <FormControl>
        <label htmlFor="password" className="myLabel">
          Password*
        </label>

        <input
          type="password"
          name="password"
          id="password"
          className={
            touched.password && errors.password ? "myInput isError" : "myInput"
          }
          onBlur={handleBlur}
          value={password || ""}
          placeholder="Enter your Password"
          onChange={handleChange}
        />
        {touched.password && errors.password ? (
          <p className="error"><Warning width={12} height={12} color="red"/> {errors.password}</p>
        ) : (
          ""
        )}
      </FormControl>

      <button disabled={isLoading} type="submit" className="submitBtn">
        {isLoading ? <span>Loading...</span> : <span>Submit</span>}
      </button>
    </MyForm>
  );
}

export default LoginForm;
