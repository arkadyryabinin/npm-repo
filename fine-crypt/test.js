// test module locally
const Cryptor = require('./app.js');

// create secret word
const secret = 'top_secret_word';

// create a new cryptor object
const cryptor = new Cryptor(secret); 

// select a text or id for encryption
// encrypted text should contain only UTF-16 characters
// with codes between 33 and 1023
// e.g. latin letters, digits and basic punctuation marks
const initText = '3 Men in a Boat (To Say Nothing of the Dog),';

// encrypt the text
const encryptedText = cryptor.encrypt(initText);

// decrypt the text
const decryptedText = cryptor.decrypt(encryptedText);