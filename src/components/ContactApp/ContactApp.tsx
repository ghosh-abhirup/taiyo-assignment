import React, { useState } from "react";
import Navbar from "../Navbar";
import ContactForm from "./ContactForm";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../features/ContactApp/contactAppSlice";
import { RootState } from "../../app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@mui/material";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";

const ContactApp = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const dispatch = useDispatch();

  const handleCreateContact = () => {
    setOpenForm(true);
  };

  const handleContactDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const contactList = useSelector((state: RootState) => state.contacts);

  return (
    <>
      <Navbar />
      <div className="containerDiv">
        <div className="w-full text-white flex flex-col items-center">
          <p className="font-bold text-2xl ">Contact App</p>

          <button className="contactBtn my-4" onClick={handleCreateContact}>
            Create contact
          </button>

          <div className="contactListParent w-[90%] sm:w-[500px]">
            {contactList.map((contact) => (
              <React.Fragment key={contact.id}>
                <div className="contactBar flex items-center justify-between mb-2">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {contact.data.firstName.trim() +
                      " " +
                      contact.data.lastName.trim()}
                  </p>
                  <div className="flex gap-3 sm:gap-4 items-center">
                    <Tooltip title="View" placement="top-start">
                      <FontAwesomeIcon
                        icon={faEye}
                        color="white"
                        className="contactBarIcon"
                        onClick={() => setOpenDetails(true)}
                      />
                    </Tooltip>

                    <Tooltip title="Edit" placement="top-start">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        color="white"
                        className="contactBarIcon"
                        onClick={() => setEditDetails(true)}
                      />
                    </Tooltip>

                    <Tooltip title="Delete" placement="top-start">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        color="white"
                        className="contactBarIcon"
                        onClick={() => handleContactDelete(contact.id)}
                      />
                    </Tooltip>
                  </div>
                </div>
                <ContactDetails
                  open={openDetails}
                  closeFn={() => setOpenDetails(false)}
                  contact={contact}
                  contactDelete={() => handleContactDelete(contact.id)}
                  openEdit={() => setEditDetails(true)}
                />

                <EditContact
                  open={editDetails}
                  closeFn={() => setEditDetails(false)}
                  contact={contact}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <ContactForm open={openForm} closeFn={() => setOpenForm(false)} />
    </>
  );
};

export default ContactApp;
