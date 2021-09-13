exports.encryptHill = (text, key) => {
    plaintext = text.toLowerCase().replace(/[^a-z]/g, '');
    k = key.toLowerCase().replace(/[^0-9 ]/g, '');
    keys = k.split(' ');
    // do some error checking
    if (plaintext.length % 2 == 1) {
        plaintext = plaintext + 'x';
    }
    if (keys.length != 4) {
        return 'key should consist of 4 integers';
    }
    for (i = 0; i < 4; i++) keys[i] = keys[i] % 26;
    ciphertext = '';
    for (i = 0; i < plaintext.length; i += 2) {
        ciphertext += String.fromCharCode(
            ((keys[0] * (plaintext.charCodeAt(i) - 97) +
                    keys[1] * (plaintext.charCodeAt(i + 1) - 97)) %
                26) +
            97,
        );
        ciphertext += String.fromCharCode(
            ((keys[2] * (plaintext.charCodeAt(i) - 97) +
                    keys[3] * (plaintext.charCodeAt(i + 1) - 97)) %
                26) +
            97,
        );
    }
    return ciphertext;
};