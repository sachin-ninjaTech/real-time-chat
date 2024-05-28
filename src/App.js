// import React, { useEffect, useState } from "react";
// import Login from "./components/Login";
// import Chat from "./components/Chat";
// import { Route, Routes } from "react-router-dom";
// import Signup from "./components/Signup";

// const App = () => {
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   useEffect(() => {
//     // Check if user credentials exist in local storage
//     const email = localStorage.getItem("email");
//     const password = localStorage.getItem("password");
//     if (email && password) {
//       setIsSignedUp(true);
//     }
//   }, []);

//   return (
//     <Routes>
//       {/* <Route path="/" element={<Login />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/chat" element={<Chat />} /> */}
//       <Route
//         path="/signup"
//         render={() =>
//           isSignedUp ? (
//             <Redirect to="/chat" />
//           ) : (
//             <Signup onSignupComplete={() => setIsSignedUp(true)} />
//           )
//         }
//       />
//       <Route path="/login" component={Login} />
//       <Route path="/chat" component={Chat} />
//       <Redirect from="/" to={isSignedUp ? "/chat" : "/signup"} />
//     </Routes>
//   );
// };

// export default App;
// App.js
import React, { useEffect, useState } from 'react';
import {  Route, Redirect, Routes, Navigate, } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import './style/medai.css';


const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    // Check if user credentials exist in local storage
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (email && password) {
      setIsSignedUp(true);
    }
  }, []);

  return (
    <Routes>
        {/* <Route path="/signup" render={() => (
          isSignedUp ? <Redirect to="/chat" /> : <Signup onSignupComplete={() => setIsSignedUp(true)} />
        )} />
        <Route path="/login" component={<Login />} />
        <Route path="/chat" component={<Chat />} />
        <Redirect from="/" to={isSignedUp ? "/chat" : "/signup"} /> */}
        <Route path="/signup" element={isSignedUp ? <Navigate to="/chat" /> : <Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={isSignedUp ? <Navigate to="/chat" /> : <Navigate to="/signup" />} />
    </Routes>
  );
};

export default App;