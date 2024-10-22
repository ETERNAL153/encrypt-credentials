const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-cbc';

function generateRandomKey() {
  const key = crypto.randomBytes(32);
  fs.writeFileSync('Resources/key.json', JSON.stringify({ key: key.toString('hex') }, null, 2));
  return key;
}
function readJsonFromFile(filePath) {
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return jsonData;
}
let key = generateRandomKey();
let jsondata = readJsonFromFile('Resources/data.json')
encrypt(jsondata,key)
function encrypt(jsonData, key) {
  const text = JSON.stringify(jsonData);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  const encryptedData = {
    iv: iv.toString('hex'),
    data: encrypted,
  };

  console.log('Encrypted Data:', encryptedData);
  fs.writeFileSync('Resources/encrypt.json', JSON.stringify(encryptedData, null, 2));
}

module.exports = { generateRandomKey, encrypt };
