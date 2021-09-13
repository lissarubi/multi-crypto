exports.decryptHill = (hillText, key) => {
    ciphertext = hillText.toLowerCase().replace(/[^a-z]/g, '');
    k = key.toLowerCase().replace(/[^0-9 ]/g, '');
    keys = k.split(' ');
    if (ciphertext.length % 2 == 1) {
        return 'ciphertext is not divisible by 2, please, check the input';
    }
    if (keys.length != 4) {
        return 'key should consist of 4 integers';
    }
    for (i = 0; i < 4; i++) keys[i] = keys[i] % 26;
    // calc inv matrix
    det = keys[0] * keys[3] - keys[1] * keys[2];
    det = ((det % 26) + 26) % 26;
    di = 0;
    for (i = 0; i < 26; i++) {
        if ((det * i) % 26 == 1) di = i;
    }
    if (di == 0) {
        alert('could not invert, try different key');
        return;
    }
    ikeys = new Array(4);
    ikeys[0] = (di * keys[3]) % 26;
    ikeys[1] = (-1 * di * keys[1]) % 26;
    ikeys[2] = (-1 * di * keys[2]) % 26;
    ikeys[3] = di * keys[0];
    for (i = 0; i < 4; i++) {
        if (ikeys[i] < 0) ikeys[i] += 26;
    }
    text = '';
    for (i = 0; i < ciphertext.length; i += 2) {
        text += String.fromCharCode(
            ((ikeys[0] * (ciphertext.charCodeAt(i) - 97) +
                    ikeys[1] * (ciphertext.charCodeAt(i + 1) - 97)) %
                26) +
            97,
        );
        text += String.fromCharCode(
            ((ikeys[2] * (ciphertext.charCodeAt(i) - 97) +
                    ikeys[3] * (ciphertext.charCodeAt(i + 1) - 97)) %
                26) +
            97,
        );
    }
    return text;
};