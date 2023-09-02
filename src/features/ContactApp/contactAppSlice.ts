import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  AppState,
  Contact,
  ContactEditPayload,
  ContactPayload,
} from "../../types";

const initialState: AppState = {
  contacts: [
    { id: "1", data: { firstName: "John", lastName: "Doe", status: "active" } },
  ],
};

export const contactAppSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactPayload>) => {
      const contact: Contact = {
        id: nanoid(),
        data: action.payload,
      };

      state.contacts.push(contact);
    },

    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    editContact: (state, action: PayloadAction<ContactEditPayload>) => {
      const { id, firstName, lastName, status } = action.payload;

      state.contacts.forEach((contact) => {
        if (contact.id === id) {
          contact.data.firstName = firstName;
          contact.data.lastName = lastName;
          contact.data.status = status;
        }
      });
    },
  },
});

export const { addContact, deleteContact, editContact } =
  contactAppSlice.actions;

export default contactAppSlice.reducer;
