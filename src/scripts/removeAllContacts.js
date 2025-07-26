import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    if (data.length !== 0) {
      data.length = 0;
    }
    await writeContacts(data);
  } catch (error) {
    console.log('Error', error);
  }
};

removeAllContacts();
