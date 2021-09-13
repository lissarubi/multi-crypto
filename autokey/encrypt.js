exports.encryptAutoKey = (text, key) => {
    var key2 = [];

    for (var i = 0, ii = key.length; i < ii; ++i) {
        key2[i] = key[i].charCodeAt(0);
    }

    var betaalph = [];
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (i = 0, ii = alphabet.length; i < ii; ++i) {
        betaalph[alphabet[i]] = i;
    }

    keylen = key.length;
    alphalen = alphabet.length;

    var autoKetText = '';
    var cc = keylen;
    var last = [];
    var k;

    for (var i = 0, ii = text.length; i < ii; ++i) {
        if (betaalph[text[i]] === undefined) {
            autoKetText += text[i];
        } else {
            if (cc-- > 0) {
                k = key2[cc];
            } else {
                k = betaalph[last.shift()];
            }

            var c = alphabet[(betaalph[text[i]] + k) % alphalen];
            autoKetText += c;
            last.push(c);
        }
    }
    return autoKetText;
};