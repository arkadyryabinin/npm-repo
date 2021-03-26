const crypto = require('crypto');

// select a text or id for encryption
// encrypted text should contain only UTF-16 characters
// with codes between 33 and 1023
// e.g. latin letters, digits and basic punctuation marks

module.exports = function Cryptor(secret) {
  if (!secret) return null;
  const sec = `${secret}`;

  this.encrypt = (val) => {
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

  this.decrypt = (val) => {
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

