function encryptTwofish(key, plaintext) {
  // Hash the key using MD5
  const hashedKey = CryptoJS.MD5(key);

  // Create a Twofish key
  const twofishKey = CryptoJS.enc.Hex.parse(hashedKey.toString());

  // Encrypt the plaintext using Twofish
  const ciphertext = CryptoJS.AES.encrypt(plaintext, twofishKey, { mode: CryptoJS.mode.ECB });

  return ciphertext.toString();
}

function decryptTwofish(key, ciphertext) {
  // Hash the key using MD5
  const hashedKey = CryptoJS.MD5(key);

  // Create a Twofish key
  const twofishKey = CryptoJS.enc.Hex.parse(hashedKey.toString());

  // Decrypt the ciphertext using Twofish
  const bytes = CryptoJS.AES.decrypt(ciphertext, twofishKey, { mode: CryptoJS.mode.ECB });

  return bytes.toString(CryptoJS.enc.Utf8);
}

// Example usage
const key = "your_secret_key";
const plaintext = "Hello, Twofish!";

const encryptedText = encryptTwofish(key, plaintext);
console.log("Encrypted: ", encryptedText);

const decryptedText = decryptTwofish(key, encryptedText);
console.log("Decrypted: ", decryptedText);