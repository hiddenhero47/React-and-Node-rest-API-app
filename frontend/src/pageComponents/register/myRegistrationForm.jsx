import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { MyForm, FormControl } from "./registrationForm.style";
import { registration } from "./validation";
import { TriangleWarning as Warning } from "../../components/icons/warningSings";

function RegistrationForm() {
  const onSubmit = () => {};

  const {
    // setErrors,
    // setTouched,
    // setFieldValue,
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
    validationSchema: registration,
    onSubmit,
  });

  const { name, email, password, confirmPassword } = values;

  const [isLoading] = useState(false);

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
