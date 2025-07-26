import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    if (!Array.isArray(data)) {
      throw new Error('No contacts found.');
    }
    const totalContacts = data.length;
    return totalContacts;
  } catch (error) {
    console.log('Error:', error);
    return 0;
  }
};

console.log(await countContacts());
