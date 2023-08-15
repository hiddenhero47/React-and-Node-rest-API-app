import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Container, MyForm, FormControl } from "./contact.style";
import { contactUsSchema } from "./validation";
import { TriangleWarning as Warning } from "../../../components/icons/warningSings";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
    setIsLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const {
    // setErrors,
    // setTouched,
    // setValues,
    setFieldValue,
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
      phoneNumber: "",
      address: "",
      massage: "",
    },
    validationSchema: contactUsSchema,
    onSubmit,
  });

  const handlePhoneNumber = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    setFieldValue("phoneNumber", inputValue);
  };

  const { name, email, phoneNumber, address, massage } = values;
  return (
    <Container>
      <MyForm onSubmit={handleSubmit}>
        <div className="inputFields">
          <div className="topFields">
            <div className="box">
              <FormControl>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  id="name"
                  className={
                    touched.name && errors.name ? "myInput isError" : "myInput"
                  }
                  onBlur={handleBlur}
                  value={name || ""}
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
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={
                    touched.phoneNumber && errors.phoneNumber
                      ? "myInput isError"
                      : "myInput"
                  }
                  onBlur={handleBlur}
                  value={phoneNumber || ""}
                  onChange={handlePhoneNumber}
                />

                {touched.phoneNumber && errors.phoneNumber ? (
                  <p className="error">
                    <Warning width={12} height={12} color="red" />{" "}
                    {errors.phoneNumber}
                  </p>
                ) : (
                  ""
                )}
              </FormControl>
            </div>

            <div className="box">
              <FormControl>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  id="email"
                  className={
                    touched.email && errors.email
                      ? "myInput isError"
                      : "myInput"
                  }
                  onBlur={handleBlur}
                  value={email || ""}
                  onChange={handleChange}
                />

                {touched.email && errors.email ? (
                  <p className="error">
                    <Warning width={12} height={12} color="red" />{" "}
                    {errors.email}
                  </p>
                ) : (
                  ""
                )}
              </FormControl>

              <FormControl>
                <input
                  type="text"
                  placeholder="Your Address"
                  name="address"
                  id="address"
                  className={
                    touched.address && errors.address
                      ? "myInput isError"
                      : "myInput"
                  }
                  onBlur={handleBlur}
                  value={address || ""}
                  onChange={handleChange}
                />

                {touched.address && errors.address ? (
                  <p className="error">
                    <Warning width={12} height={12} color="red" />{" "}
                    {errors.address}
                  </p>
                ) : (
                  ""
                )}
              </FormControl>
            </div>
          </div>

          <div className="bottomFields">
            <FormControl>
              <textarea
                type="textarea"
                placeholder="Enter Your Message Here..."
                name="massage"
                id="massage"
                className={
                  touched.massage && errors.massage
                    ? "myBigInput isError"
                    : "myBigInput"
                }
                onBlur={handleBlur}
                value={massage || ""}
                onChange={handleChange}
              />

              {touched.massage && errors.massage ? (
                <p className="error">
                  <Warning width={12} height={12} color="red" />{" "}
                  {errors.massage}
                </p>
              ) : (
                ""
              )}
            </FormControl>
          </div>
        </div>

        <button disabled={isLoading} type="submit" className="submitBtn">
          {isLoading ? (
            <span className="appLoader">
              <BubbleSlide />
            </span>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </MyForm>
    </Container>
  );
}

export default ContactForm;
