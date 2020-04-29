exports.encryptAdfgvx = (text, keysquare, keyword) => {
  var plaintext, ciphertext, keysquare, keyword;
  plaintext = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  keysquare = keysquare.toLowerCase().replace(/[^a-z0-9]/g, '');
  keyword = keyword.toLowerCase().replace(/[^a-z]/g, '');
  // do some error checking
  if (keysquare.length != 36) {
    return 'keysquare must be 36 characters in length';
  }
  if (keyword.length <= 1) {
    return 'keyword should be at least 2 characters long';
  }
  adfgvx = 'ADFGVX';
  ciphertext1 = '';
  for (i = 0; i < plaintext.length; i++) {
    index = keysquare.indexOf(plaintext.charAt(i));
    ciphertext1 += adfgvx.charAt(index / 6) + adfgvx.charAt(index % 6);
  }
  var colLength = ciphertext1.length / keyword.length;
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  ciphertext = '';
  k = 0;
  for (i = 0; i < keyword.length; i++) {
    while (k < 26) {
      t = keyword.indexOf(chars.charAt(k));
      arrkw = keyword.split('');
      arrkw[t] = '_';
      keyword = arrkw.join('');
      if (t >= 0) break;
      else k++;
    }
    for (j = 0; j < colLength; j++)
      ciphertext += ciphertext1.charAt(j * keyword.length + t);
  }
  return ciphertext;
};

exports.decryptAdfgvx = (adfgvxText, keysquare, keyword) => {
  ciphertext = adfgvxText.toLowerCase().replace(/[^a-z0-9]/g, '');
  keysquare = keysquare.toLowerCase().replace(/[^a-z0-9]/g, '');
  keyword = keyword.toLowerCase().replace(/[^a-z]/g, '');
  klen = keyword.length;
  var re = /[^adfgvx]/;

  // do some error checking
  if (re.test(ciphertext)) {
    return 'ciphertext can only contain A,D,F,G,V or X characters.';
  }
  if (ciphertext.length % 2 != 0) {
    return 'number of ciphertext characters must be even';
  }
  if (keysquare.length != 36) {
    return 'keysquare must be 36 characters in length';
  }
  if (klen <= 1) {
    return 'keyword should be at least 2 characters long';
  }
  var numLongCols = ciphertext.length % klen;
  var cols = new Array(klen);
  var colLength = Math.floor(ciphertext.length / klen);
  chars = 'abcdefghijklmnopqrstuvwxyz';
  i = 0;
  upto = 0;
  for (j = 0; j < klen; ) {
    t = keyword.indexOf(chars.charAt(i));
    if (t >= 0) {
      if (t < numLongCols) cl = colLength + 1;
      else cl = colLength;
      cols[t] = ciphertext.substr(upto, cl);
      upto = upto + cl;
      arrkw = keyword.split('');
      arrkw[t] = '_';
      keyword = arrkw.join('');
      j++;
    } else i++;
  }
  text1 = '';
  for (j = 0; j < colLength + 1; j++) {
    for (i = 0; i < klen; i++) {
      text1 += cols[i].charAt(j);
    }
  }
  adfgvx = 'adfgvx';
  text = '';
  for (i = 0; i < text1.length; i += 2) {
    keyindex =
      adfgvx.indexOf(text1.charAt(i)) * 6 + adfgvx.indexOf(text1.charAt(i + 1));
    text += keysquare.charAt(keyindex);
  }
  return text;
};
