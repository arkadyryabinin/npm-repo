const Cryptor = require('fine-crypt');

const cryptor = new Cryptor('top_secret_word'); // creates a new cryptor object

const initText = 'world my treasure world world my treasure world world my treasure world world my treasure world';

const encryptedText = cryptor.encrypt(initText) // returns encrypted text

const decryptedText = cryptor.decrypt(encryptedText) // returns 

console.log(initText, encryptedText, decryptedText);