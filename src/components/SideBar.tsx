import React from "react";
import { SideBarProps } from "../types";
import { Drawer } from "@mui/material";

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
        <p className="px-4 py-2 text-lg font-semibold leading-6 cursor-pointer  hover:bg-black/[0.05] transition ">
          Contact App
        </p>
        <p className="px-4 py-2 text-lg font-semibold leading-6 cursor-pointer mt-2 hover:bg-black/[0.05] transition ">
          Graph Visualisation App
        </p>
      </Drawer>
    </>
  );
};

export default SideBar;
