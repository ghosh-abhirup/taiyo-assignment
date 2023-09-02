import { Dialog, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { ContactFormProps } from "../../types";
import { useDispatch } from "react-redux";
import { addContact } from "../../features/ContactApp/contactAppSlice";

const ContactForm = ({ open, closeFn }: ContactFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("inactive");

  const dispatch = useDispatch();

  const handleSaveContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (firstName !== "" && lastName !== "") {
      dispatch(addContact({ firstName, lastName, status }));
      setFirstName("");
      setLastName("");
      setStatus("inactive");
      closeFn();
    }
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
        onClick={(e) => handleSaveContact(e)}
      >
        Save Contact
      </button>
    </Dialog>
  );
};

export default ContactForm;
