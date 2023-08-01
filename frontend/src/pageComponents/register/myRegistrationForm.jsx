import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyForm, FormControl } from "./registrationForm.style";
import { registrationSchema } from "./validation";
import { TriangleWarning as Warning } from "../../components/icons/warningSings";
import { register, reset } from "../../features/auth/authSlice";

function RegistrationForm() {
  
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
      name: values.name,
      email: values.email,
      password: values.password,
      role: "basic",
    };
    dispatch(register(userData));
  };

  const {
    // setErrors,
    // setTouched,
    // setFieldValue,
    // setValues,
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  const { name, email, password, confirmPassword } = values;

  return (
    <MyForm onSubmit={handleSubmit}>
      <FormControl>
        <label htmlFor="name" className="myLabel">
          Name*
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className={
            touched.name && errors.name ? "myInput isError" : "myInput"
          }
          onBlur={handleBlur}
          value={name || ""}
          placeholder="Enter your Name"
          onChange={handleChange}
        />
        {touched.name && errors.name ? (
          <p className="error">
            <Warning width={12} height={12} color="red" /> {errors.name}
          </p>
        ) : (
          ""
        )}
      </FormControl>

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
          <p className="error">
            <Warning width={12} height={12} color="red" /> {errors.email}
          </p>
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
          <p className="error">
            <Warning width={12} height={12} color="red" /> {errors.password}
          </p>
        ) : (
          ""
        )}
      </FormControl>

      <FormControl>
        <label htmlFor="confirmPassword" className="myLabel">
          Confirm Password*
        </label>

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className={
            touched.confirmPassword && errors.confirmPassword
              ? "myInput isError"
              : "myInput"
          }
          onBlur={handleBlur}
          value={confirmPassword || ""}
          placeholder="Confirm your Password"
          onChange={handleChange}
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <p className="error">
            <Warning width={12} height={12} color="red" />{" "}
            {errors.confirmPassword}
          </p>
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

export default RegistrationForm;
