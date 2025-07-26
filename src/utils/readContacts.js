import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const content = await fs.readFile(PATH_DB);

    return JSON.parse(content.toString());
  } catch (error) {
    console.log('Error:', error);
  }
};
