import { Dialog, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../features/ContactApp/contactAppSlice";
import { EditContactProps } from "../../types";

const EditContact = ({ open, closeFn, contact }: EditContactProps) => {
  const [firstName, setFirstName] = useState(contact.data.firstName);
  const [lastName, setLastName] = useState(contact.data.lastName);
  const [status, setStatus] = useState(contact.data.status);

  const dispatch = useDispatch();

  const handleEditContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(editContact({ id: contact.id, firstName, lastName, status }));
    closeFn();
  };

  const handleClose = () => {
    closeFn();
    setFirstName(contact.data.firstName);
    setLastName(contact.data.lastName);
    setStatus(contact.data.status);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
        Edit contact screen
      </p>
      <form action="submit">
        <div className="formElement">
          <p className="labelPara">First Name</p>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="inpElement"
          />
        </div>
        <div className="formElement">
          <p className="labelPara">Last Name</p>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="inpElement"
          />
        </div>
        <div className="formElement">
          <p className="labelPara">Status</p>
          <div className="w-full sm:ml-8">
            <RadioGroup
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                value="active"
                label="Active"
                sx={{
                  color: "white",

                  "& .Mui-checked": {
                    color: "white",
                  },
                }}
              />
              <FormControlLabel
                control={<Radio />}
                value="inactive"
                label="Inactive"
                sx={{
                  color: "white",

                  "& .Mui-checked": {
                    color: "white",
                  },
                }}
              />
            </RadioGroup>
          </div>
        </div>
      </form>
      <button
        className="contactBtn w-full sm:w-fit mx-auto"
        onClick={(e) => handleEditContact(e)}
      >
        Save
      </button>
    </Dialog>
  );
};

export default EditContact;
