### Simple encode/decode library, initially intended for database id's obfuscation 

## Usage

```javascript
const Cryptor = require('fine-crypt');

// create secret word
const secret = 'top_secret_word';

// create a new cryptor object
const cryptor = new Cryptor(secret);

// select a text or id for encryption
// encrypted text should contain only UTF-16 characters
// with codes between 33 and 1023
// e.g. latin letters, digits and basic punctuation marks
const initText = '3 Men in a Boat (To Say Nothing of the Dog),';

// encrypt the text, encrypted text is a Base36 string
const encryptedText = cryptor.encrypt(initText);
// or you can redefine the secret word:
const encryptedText = cryptor.encrypt(initText, secret);

// decrypt the text
const decryptedText = cryptor.decrypt(encryptedText);
// or you can redefine the secret word
const decryptedText = cryptor.decrypt(encryptedText, secret);
```

## Install

```bash
$ npm install fine-crypt
```

## License

ISC