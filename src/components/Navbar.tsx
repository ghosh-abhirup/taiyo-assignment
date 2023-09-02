import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSidebar = () => {
    !sideBarOpen && setSideBarOpen(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white/[0.05] px-4 py-2">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          color="white"
          onClick={handleSidebar}
          className="cursor-pointer"
        />
      </div>

      <SideBar open={sideBarOpen} close={() => setSideBarOpen(false)} />
    </>
  );
};

export default Navbar;
