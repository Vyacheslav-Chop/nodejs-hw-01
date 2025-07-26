import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (data.length !== 0) {
      const newData = data.slice(0, data.length - 1);
      await writeContacts(newData);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

removeLastContact();
