exports.encryptFourSquare = (text, key1, key2) => {
  plaintext = text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[j]/g, 'i');
  k1 = key1.toLowerCase().replace(/[^a-z]/g, '');
  k2 = key2.toLowerCase().replace(/[^a-z]/g, '');
  // do some error checking
  if (k1.length != 25 || k2.length != 25) {
    return 'keysquare must be 25 characters in length';
  }
  if (plaintext.length % 2 == 1) plaintext += 'x';
  ciphertext = '';
  rt = 'abcdefghiklmnopqrstuvwxyz';
  for (i = 0; i < plaintext.length; i += 2) {
    a = rt.indexOf(plaintext.charAt(i)) % 5;
    b = parseInt(rt.indexOf(plaintext.charAt(i)) / 5);
    c = rt.indexOf(plaintext.charAt(i + 1)) % 5;
    d = parseInt(rt.indexOf(plaintext.charAt(i + 1)) / 5);
    ciphertext += k1.charAt(5 * b + c);
    ciphertext += k2.charAt(5 * d + a);
  }
  return ciphertext.toUpperCase();
};

exports.decryptFourSquare = (text, key1, key2) => {
  ciphertext = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/[j]/g, 'i');
  k1 = key1.toLowerCase().replace(/[^a-z]/g, '');
  k2 = key2.toLowerCase().replace(/[^a-z]/g, '');
  // do some error checking
  if (k1.length != 25 || k2.length != 25) {
    return 'keysquare must be 25 characters in length';
  }
  if (ciphertext.length % 2 == 1) {
    return 'ciphertext should be even length, please, change your text';
  }
  plaintext = '';
  rt = 'abcdefghiklmnopqrstuvwxyz';
  for (i = 0; i < ciphertext.length; i += 2) {
    a = k1.indexOf(ciphertext.charAt(i)) % 5;
    b = parseInt(k1.indexOf(ciphertext.charAt(i)) / 5);
    c = k2.indexOf(ciphertext.charAt(i + 1)) % 5;
    d = parseInt(k2.indexOf(ciphertext.charAt(i + 1)) / 5);
    plaintext += rt.charAt(5 * b + c);
    plaintext += rt.charAt(5 * d + a);
  }
  return plaintext.toUpperCase();
};
