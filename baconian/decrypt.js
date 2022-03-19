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