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