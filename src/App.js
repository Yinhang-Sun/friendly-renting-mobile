import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Configure navigation menu */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/citylist">CityList</Link></li>
        </ul>

        {/* Configure routers */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
