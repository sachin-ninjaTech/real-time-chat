// Login.jsx
import React from 'react';
import FormCom from './FormCom';
import LoginSchema from './yup';

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  // validationSchema:LoginSchema,
  const onSubmit = (values) => {
    console.log(values);
    // Handle login logic here, e.g., authenticate with Firebase
    localStorage.setItem("email" , values.email)
    localStorage.setItem("password" , values.password)
    window.location.href = "/chat";
  };

  return (
    <FormCom
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
      title="Login"
    />
  );
};

export default Login;