### Simple encode/decode library, initially intended for database id's obfuscation 

## Usage

```javascript
const Cryptor = require('fine-crypt');

const cryptor = new Cryptor('top_secret_word'); // creates a new cryptor object

const initText = 'Hello, world';

const encryptedText = cryptor.encrypt(initText) // returns encrypted text

const decryptedText = cryptor.decrypt(encryptedText) // returns decrypted text
```

## Install

```bash
$ npm install fine-crypt
```

## License

ISC