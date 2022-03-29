import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Login}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Routes>
        <Login />
      </BrowserRouter>
    </div>
  );
};

export default App;
