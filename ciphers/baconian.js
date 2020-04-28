exports.encryptBaconian = (text, alphabetUser) => {
  text = text.toUpperCase();
  var alphabet = alphabetUser.toUpperCase();
  var index = -1;
  var length = text.length;
  var alphabetIndex;
  var space = '';
  var baconianText = '';
  while (++index < length) {
    alphabetIndex = alphabet.indexOf(text.charAt(index));
    if (alphabetIndex > -1) {
      baconianText +=
        space +
        ((alphabetIndex & 0x10 ? 'B' : 'A') + // 0b10000
        (alphabetIndex & 0x08 ? 'B' : 'A') + // 0b01000
        (alphabetIndex & 0x04 ? 'B' : 'A') + // 0b00100
        (alphabetIndex & 0x02 ? 'B' : 'A') + // 0b00010
          (alphabetIndex & 0x01 ? 'B' : 'A')); // 0b00001
      space = '';
    } else if (index) {
      space = ' ';
    }
  }
  return baconianText;
};

exports.decryptBaconian = (baconianText, alphabetUser) => {
  baconianText = baconianText.toUpperCase();
  var alphabet = alphabetUser.toUpperCase();
  var index = -1;
  var length = baconianText.length;
  var space = '';
  var text = '';
  var buffer = [];
  var symbol;
  var alphabetIndex;
  while (++index < length) {
    symbol = baconianText.charAt(index);
    if (symbol == 'A' || symbol == 'B') {
      buffer.push(symbol);
    } else {
      space = ' ';
    }
    if (buffer.length == 5) {
      alphabetIndex =
        (buffer[0] == 'A' ? 0 : 0x10) + // 0b10000
        (buffer[1] == 'A' ? 0 : 0x08) + // 0b01000
        (buffer[2] == 'A' ? 0 : 0x04) + // 0b00100
        (buffer[3] == 'A' ? 0 : 0x02) + // 0b00010
        (buffer[4] == 'A' ? 0 : 0x01); // 0b00001
      buffer = [];
      text += (text.length ? space : '') + alphabet.charAt(alphabetIndex);
      space = '';
    }
  }
  return text.toLowerCase();
};
