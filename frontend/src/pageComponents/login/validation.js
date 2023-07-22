import * as yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, {
      message: "Please enter a valid email ",
    })
    .required("Email is Required "),
    password: yup
    .string()
    .min(4, "Must be at Least 4 Characters!")
    .required("Password is Required "),
});