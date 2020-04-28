exports.encryptBase64 = (text) => {
  keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var base64Text = '';
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  function utf8Encode(string) {
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  }

  text = utf8Encode(text);

  while (i < text.length) {
    chr1 = text.charCodeAt(i++);
    chr2 = text.charCodeAt(i++);
    chr3 = text.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    base64Text =
      base64Text +
      keyStr.charAt(enc1) +
      keyStr.charAt(enc2) +
      keyStr.charAt(enc3) +
      keyStr.charAt(enc4);
  }

  return base64Text;
};

exports.decryptBase64 = (base64Text) => {
  var e = {},
    i,
    k,
    v = [],
    text = '',
    w = String.fromCharCode;
  var n = [
    [65, 91],
    [97, 123],
    [48, 58],
    [43, 44],
    [47, 48],
  ];

  for (z in n) {
    for (i = n[z][0]; i < n[z][1]; i++) {
      v.push(w(i));
    }
  }
  for (i = 0; i < 64; i++) {
    e[v[i]] = i;
  }

  for (i = 0; i < base64Text.length; i += 72) {
    var b = 0,
      c,
      x,
      l = 0,
      o = base64Text.substring(i, i + 72);
    for (x = 0; x < o.length; x++) {
      c = e[o.charAt(x)];
      b = (b << 6) + c;
      l += 6;
      while (l >= 8) {
        text += w((b >>> (l -= 8)) % 256);
      }
    }
  }
  return text;
};
