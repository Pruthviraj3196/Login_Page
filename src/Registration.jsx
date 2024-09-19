import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import './App.css';

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Form Submitted", values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
            <p className="modal-desc">Sign Up into your Account.</p>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="confirm_password" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error">{errors.confirm_password}</p>
                ) : null}
              </div>
              <div className="modal-buttons">
                <a href="#">Want to register using Gmail?</a>
                <button className="input-button" type="submit" disabled={!isValid}>
                  Registration
                </button>
              </div>
            </form>
            <p className="sign-up">
              Already have an account? <a href="#">Sign In now</a>
            </p>
          </div>
          <div className="modal-right">
            <img
              src="https://png.pngtree.com/background/20240812/original/pngtree-closeup-of-woman-accessing-sites-login-page-on-laptop-screen-photo-picture-image_10075783.jpg"
              alt="Login page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
