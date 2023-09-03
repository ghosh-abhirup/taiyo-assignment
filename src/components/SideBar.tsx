import React from "react";
import { SideBarProps } from "../types";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = ({ open, close }: SideBarProps) => {
  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={close}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "60vw", sm: "30vw" },
            paddingBlock: "40px",
          },
        }}
      >
        <Link
          to="/"
          className="px-4 py-2 text-lg font-semibold leading-6 cursor-pointer  hover:bg-black/[0.05] transition "
        >
          Home
        </Link>
        <Link
          to="/contactApp"
          className="px-4 py-2 text-lg font-semibold leading-6 cursor-pointer mt-2  hover:bg-black/[0.05] transition "
        >
          Contact
        </Link>
        <Link
          to="/graphApp"
          className="px-4 py-2 text-lg font-semibold leading-6 cursor-pointer mt-2 hover:bg-black/[0.05] transition "
        >
          Charts and Maps
        </Link>
      </Drawer>
    </>
  );
};

export default SideBar;
