exports.encryptColumnarTransposition = (text, key, padChar = 'x') => {
  plaintext = text.toLowerCase().replace(/[^a-z]/g, '');
  var key = key.toLowerCase().replace(/[^a-z]/g, '');
  var pc = padChar.toLowerCase().replace(/[^a-z]/g, '');
  if (pc == '') pc = 'x';
  while (plaintext.length % key.length != 0) plaintext += pc.charAt(0);
  var colLength = plaintext.length / key.length;
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  columnarTranspositionText = '';
  k = 0;
  for (i = 0; i < key.length; i++) {
    while (k < 26) {
      t = key.indexOf(chars.charAt(k));
      arrkw = key.split('');
      arrkw[t] = '_';
      key = arrkw.join('');
      if (t >= 0) break;
      else k++;
    }
    for (j = 0; j < colLength; j++)
      columnarTranspositionText += plaintext.charAt(j * key.length + t);
  }
  return columnarTranspositionText;
};

exports.decryptColumnarTransposition = (columnarTranspositionText, key) => {
  ciphertext = columnarTranspositionText.toLowerCase().replace(/[^a-z]/g, '');
  keyword = key.toLowerCase().replace(/[^a-z]/g, '');
  klen = keyword.length;
  if (klen <= 1) {
    return 'keyword should be at least 2 characters long';
  }
  if (ciphertext.length % klen != 0) {
    return 'ciphertext has not been padded, the result may be incorrect (incorrect keyword?).';
  }
  var cols = new Array(klen);
  var colLength = ciphertext.length / klen;
  for (i = 0; i < klen; i++)
    cols[i] = ciphertext.substr(i * colLength, colLength);
  var newcols = new Array(klen);
  chars = 'abcdefghijklmnopqrstuvwxyz';
  j = 0;
  i = 0;
  while (j < klen) {
    t = keyword.indexOf(chars.charAt(i));
    if (t >= 0) {
      newcols[t] = cols[j++];
      arrkw = keyword.split('');
      arrkw[t] = '_';
      keyword = arrkw.join('');
    } else i++;
  }
  text = '';
  for (i = 0; i < colLength; i++) {
    for (j = 0; j < klen; j++) text += newcols[j].charAt(i);
  }
  return text;
};
