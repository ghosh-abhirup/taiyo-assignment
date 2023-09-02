import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../features/ContactApp/contactAppSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@mui/material";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import { Contact } from "../../types";

interface ContactListProps {
  contact: Contact;
}

const ContactList = ({ contact }: ContactListProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const dispatch = useDispatch();

  const handleContactDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className="contactBar flex items-center justify-between mb-2">
        <p className="text-sm sm:text-base font-semibold text-white">
          {contact.data.firstName.trim() + " " + contact.data.lastName.trim()}
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
    </>
  );
};

export default ContactList;
