exports.encryptRailFence = (text, key) => {
  plaintext = text.toLowerCase().replace(/[^a-z]/g, '');
  var key = parseInt(key);
  if (key > Math.floor(2 * (plaintext.length - 1))) {
    return 'key is too large';
  }
  if (key == 1) railFenceText = plaintext;
  else {
    railFenceText = '';
    for (line = 0; line < key - 1; line++) {
      skip = 2 * (key - line - 1);
      j = 0;
      for (i = line; i < plaintext.length; ) {
        railFenceText += plaintext.charAt(i);
        if (line == 0 || j % 2 == 0) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < plaintext.length; i += 2 * (key - 1))
      railFenceText += plaintext.charAt(i);
  }
  return railFenceText;
};

exports.decryptRailFence = (railFenceText, key) => {
  ciphertext = railFenceText.toLowerCase().replace(/[^a-z]/g, '');
  var key = parseInt(key);
  if (key > Math.floor(2 * (ciphertext.length - 1))) {
    return 'key is too large for the ciphertext length.';
  }
  if (key == 1) return ciphertext;
  else {
    text = new Array(ciphertext.length);
    k = 0;
    for (line = 0; line < key - 1; line++) {
      skip = 2 * (key - line - 1);
      j = 0;
      for (i = line; i < ciphertext.length; ) {
        text[i] = ciphertext.charAt(k++);
        if (line == 0 || j % 2 == 0) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < ciphertext.length; i += 2 * (key - 1))
      text[i] = ciphertext.charAt(k++);

    return text.join('');
  }
};
