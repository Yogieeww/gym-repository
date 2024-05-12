import React from "react";
import Home from "./Pages/Home";
// import Plans from "./Pages/Plans";
// import Aboutus from "./Pages/Aboutus";
// import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop";
// import Login from "./Components/Login"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/plans" element={<Plans />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
