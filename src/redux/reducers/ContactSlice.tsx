import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Contact } from '../types'; // Define the Contact type as per your requirements

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
    // Add additional properties as needed
  }

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id } = action.payload;
      const existingContact = state.contacts.find((contact) => contact.id === id);
      if (existingContact) {
        Object.assign(existingContact, action.payload);
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, editContact, deleteContact } = ContactsSlice.actions;
export default ContactsSlice.reducer;