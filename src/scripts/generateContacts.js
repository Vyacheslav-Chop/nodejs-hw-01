import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const data = await readContacts();
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    if (newContacts.length === 0) return;

    const updateContacts = [...data, ...newContacts];
    await writeContacts(updateContacts);
  } catch (error) {
    console.log('Error:', error);
  }
};

generateContacts(4);
