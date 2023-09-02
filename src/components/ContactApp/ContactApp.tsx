import React, { useState } from "react";
import Navbar from "../Navbar";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ContactList from "./ContactList";
import { Contact } from "../../types";

const ContactApp = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleCreateContact = () => {
    setOpenForm(true);
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
            {contactList.map((contact: Contact) => (
              <ContactList contact={contact} key={contact.id} />
            ))}
          </div>
        </div>
      </div>

      <ContactForm open={openForm} closeFn={() => setOpenForm(false)} />
    </>
  );
};

export default ContactApp;
