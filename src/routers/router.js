import React from "react";
import { Routes, Route } from "react-router";
import Mainpage from "../Page/mainpage";
import Congratulate from "../Page/congratulate"

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Mainpage/>}/>
        <Route exact path="/congratulate" element={<Congratulate/>}/>
      </Routes>
    </>
  );
}

export default Routers;
