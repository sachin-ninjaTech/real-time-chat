import React from 'react';
import Form from '../components/FormCom';
import LoginSchema, { SignupSchema } from './yup'; // Adjust this schema for signup if needed
import { auth, db } from '../firebase'; // Import auth and db from your firebase.js file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (values) => {
    try {
      // Create a new user account with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      // Save additional user data to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: values.email,
        password:values.password,
        confirmPassword:values.confirmPassword
        // Add any additional user data here
      });
      // Redirect to the chat page or show a success message
      window.location.href ="/chat"
    } catch (error) {
      console.error("Error signing up: ", error);
      // Handle errors, e.g., show an error message to the user
    }
  }

  return <Form initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmit} title="signup" />;
};

export default Signup;