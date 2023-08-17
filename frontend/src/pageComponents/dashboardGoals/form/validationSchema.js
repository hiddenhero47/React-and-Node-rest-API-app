import * as yup from "yup";

export const GoalFormSchema = yup.object().shape({
    text: yup
    .string()
    .min(4, "Must be at Least 4 Characters!")
    .required("Required"),
});