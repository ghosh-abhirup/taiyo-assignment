import React from "react";
import Navbar from "../Navbar";

const ContactApp = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className=" text-white ">
          <p className="font-bold text-2xl ">Contact App</p>

          <button className="contactBtn my-4">Create contact</button>
        </div>
      </div>
    </>
  );
};

export default ContactApp;
