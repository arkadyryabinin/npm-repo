const crypto = require('crypto');

// select a text or id for encryption
// encrypted text should contain only UTF-16 characters
// with codes between 33 and 1023
// e.g. latin letters, digits and basic punctuation marks
// encrypted text is a Base36 string

module.exports = function Cryptor(secret) {

  this.encrypt = (val, updatedSecret) => {
    // `secret` is an optional parameter if you want to redefine the secret word
    const sec = `${updatedSecret || secret || ''}`;
    if (!sec) return null;
    if (!val) return false;
    const value = `${val}`;
    const key = crypto.createHash('sha1').update(sec).digest('hex');
    let j = 0;
    let crypttext = '';
       
    for (let i = 0; i < value.length; i += 1) {
      const ordStr = value.charCodeAt(i);
      if (j === key.length) j = 0;
      const ordKey = key.charCodeAt(j);
      j += 1;
      crypttext += (ordStr + ordKey).toString(36).split('').reverse().join('');
    }
    return crypttext;
  };

  this.decrypt = (val, updatedSecret) => {
    // `secret` is an optional parameter if you want to redefine the secret word
    const sec = `${updatedSecret || secret || ''}`;
    if (!sec) return null;
    if (!val) return false;
    const value = `${val}`;
    const key = crypto.createHash('sha1').update(sec).digest('hex');
    let j = 0;
    let decrypttext = '';
    for (let i = 0; i < value.length; i += 2) {
      const ordStr = parseInt(`${value.charAt(i)}${value.charAt(i+1)}`.split('').reverse().join(''), 36);
      if (j === key.length) j = 0;
      const ordKey = key.charCodeAt(j);
      j += 1;
      decrypttext += String.fromCharCode(ordStr - ordKey);
    }
    return decrypttext;
  };
};

