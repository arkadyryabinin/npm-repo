const crypto = require('crypto');

module.exports = function Cryptor(secret) {
  if (!secret) return null;
  const sec = `${secret}`;

  this.encrypt = (val) => {
    // console.log(value);
    if (!val) return false;
    const value = `${val}`;
    const key = crypto.createHash('sha1').update(sec).digest('hex');
    let j = 0;
    let crypttext = '';
    for (let i = 0; i < value.length; i += 1) {
      const ordStr = value[i].charCodeAt(0);
      if (j === key.length) j = 0;
      const ordKey = key[j].charCodeAt(0);
      j += 1;
      crypttext += (ordStr, ordKey, (ordStr + ordKey).toString(36).split('').reverse().join(''));
    }
    return crypttext;
  };

  this.decrypt = (val) => {
    // console.log(value);
    if (!val) return false;
    const value = `${val}`;
    const key = crypto.createHash('sha1').update(sec).digest('hex');
    let j = 0;
    let decrypttext = '';
    for (let i = 0; i < value.length; i += 2) {
      const ordStr = parseInt(`${value[i]}${value[i + 1]}`.split('').reverse().join(''), 36);
      // console.log(ordStr);
      if (j === key.length) j = 0;
      const ordKey = key[j].charCodeAt(0);
      j += 1;
      decrypttext += String.fromCharCode(ordStr - ordKey);
    }
    return decrypttext;
  };
};
// const cryptor = new Cryptor('hell');
// console.log(cryptor.decrypt(cryptor.encrypt('hello world!')));
