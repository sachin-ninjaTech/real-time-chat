// Form.jsx
import React from 'react';
import { useFormik } from 'formik';
import LoginSchema from './yup'; // Adjust this schema for signup if needed
import "../style/style.css";

const FormCom = ({ initialValues, validationSchema, onSubmit, title }) => {
  const { handleSubmit, values, handleChange, touched, errors, isValid } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <main>
     <ul className="light-rays">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <li></li>
          <li></li>
        </ul>
      <div className="login">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          {title === 'signup' && (
            <div className="group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p>{errors.confirmPassword}</p>
              ) : null}
            </div>
          )}
          <button type="submit">{title}</button>
        </form>
      </div>
    </main>
  );
};

export default FormCom;