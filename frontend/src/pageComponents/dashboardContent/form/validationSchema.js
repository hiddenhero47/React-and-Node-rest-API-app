import * as yup from "yup";

const PAGE = {
  ONE: "home",
  TWO: "aboutUs",
  THREE: "portfolio",
  FOUR: "services",
  FIVE: "contactUs",
};

export const ContentFormSchema = yup.object().shape({
  header: yup
    .string()
    .oneOf(Object.values(PAGE), "Invalid header value")
    .required("Required"),
  title: yup
    .string()
    .required("Required")
    .min(5, "title most be at least 5 characters"),
  description: yup
    .string()
    .required("Required")
    .min(10, "Description must be at least 10 characters"),
  type: yup.string().required("Required"),
  content: yup.mixed().required("Content is required"),
});
