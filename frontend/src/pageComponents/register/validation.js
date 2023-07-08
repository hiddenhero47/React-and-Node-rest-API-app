import * as yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registration = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, {
      message: "Please enter a valid email ",
    })
    .required("Email is Required "),
  name: yup
    .string()
    .min(4, "Must be at Least 4 Characters!")
    .required("Information is Required "),
  password: yup
    .string()
    .min(4, "Must be at Least 4 Characters!")
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Password is Required "),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password most match")
    .required("Confirm Password "),
});
