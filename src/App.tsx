import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactApp from "./components/ContactApp/ContactApp";
import GraphApp from "./components/GraphApp/GraphApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactApp" element={<ContactApp />} />
        <Route path="/graphApp" element={<GraphApp />} />
      </Routes>
    </>
  );
}

export default App;
