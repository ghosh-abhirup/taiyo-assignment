import React from "react";
import { Dialog } from "@mui/material";
import { ContactDetailsProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ContactDetails = ({
  open,
  closeFn,
  contact,
  contactDelete,
  openEdit,
}: ContactDetailsProps) => {
  const handleEditBtn = () => {
    closeFn();
    openEdit();
  };

  return (
    <Dialog
      open={open}
      onClose={closeFn}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "90%", sm: "500px" },
          padding: "16px",
          borderRadius: "10px",
          background: "rgba( 255, 255, 255, 0 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 19px )",
        },
      }}
    >
      <p className="font-bold text-white mb-6 text-lg sm:text-2xl mx-auto">
        Create contact screen
      </p>
      <form action="submit">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <p className="labelPara">First Name</p>
          <p className="detailsPara">{contact.data.firstName}</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <p className="labelPara">Last Name</p>
          <p className="detailsPara">{contact.data.lastName}</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <p className="labelPara">Status</p>
          <div className="w-full sm:ml-8">
            <p className="detailsPara">
              {contact.data.status.slice(0, 1).toUpperCase() +
                contact.data.status.slice(1)}
            </p>
          </div>
        </div>
      </form>
      <div className="w-full mt-4 sm:w-fit mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4">
        <button
          className="contactBtn w-full sm:w-fit flex gap-2 items-center justify-center"
          onClick={handleEditBtn}
        >
          <p>Edit</p>
          <FontAwesomeIcon
            icon={faPenToSquare}
            color="#1b263b"
            className="contactBarIcon"
          />
        </button>
        <button
          className="contactBtn w-full sm:w-fit flex gap-4 items-center justify-center"
          onClick={contactDelete}
        >
          <p>Delete</p>
          <FontAwesomeIcon
            icon={faTrashCan}
            color="#1b263b"
            className="contactBarIcon"
          />
        </button>
      </div>
    </Dialog>
  );
};

export default ContactDetails;
