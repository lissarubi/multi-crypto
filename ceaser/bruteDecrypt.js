exports.bruteDecryptCeaser = (text) => {
    var texts = [];

    for (var c = 1; c <= 26; c++) {
        texts.push(this.encodeCeaser(text, c));
    }
    return texts;
};