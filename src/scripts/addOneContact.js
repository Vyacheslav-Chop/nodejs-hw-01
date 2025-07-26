import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();
  try {
    const newContact = createFakeContact();
    if (!newContact) return;

    data.push(newContact);

    await writeContacts(data);
  } catch (error) {
    console.log('Error:', error);
  }
};

addOneContact();
