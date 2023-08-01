import * as yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const contactUsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, {
      message: "Please enter a valid email",
    })
    .required("Email is required"),
  name: yup
    .string()
    .min(4, "Must be at least 4 characters!")
    .required("Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, {
      message: "Please enter a valid phone number (only numbers allowed)",
    })
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  massage: yup.string().required("Message is required"),
});
