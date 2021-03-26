const Cryptor = require('./app.js');

const cryptor = new Cryptor('top_secret_word'); // creates a new cryptor object

// const initText = 'ᔄ';
const initText = 'Three Men in a Boat (To Say Nothing of the Dog),';

const encryptedText = cryptor.encrypt(initText) // returns encrypted text
console.log('encryptedText', encryptedText);
const decryptedText = cryptor.decrypt(encryptedText) // returns 

console.log(initText, encryptedText, decryptedText);