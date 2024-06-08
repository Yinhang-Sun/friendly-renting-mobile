import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CityList from "./pages/CityList";

import { Button } from "antd-mobile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Project Root Component <Button>Login</Button> */}

        {/* configure navigation menu */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/citylist">CityList</Link></li>
        </ul>

        {/* configure routers */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/citylist" element={<CityList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
