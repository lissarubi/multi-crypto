exports.encryptPlayfair = (text, keysquare) => {
    plaintext = text
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/[j]/g, 'i');
    keysquare = keysquare.toLowerCase().replace(/[^a-z]/g, '');
    // do some error checking
    if (keysquare.length != 25) {
        return 'keysquare must be 25 characters in length';
    }
    while (plaintext.length % 2 != 0) plaintext += 'x';
    ciphertext = '';
    for (i = 0; i < plaintext.length; i += 2) {
        a = plaintext.charAt(i);
        b = plaintext.charAt(i + 1);
        if (a == b) b = 'x';
        row1 = parseInt(keysquare.indexOf(a) / 5);
        col1 = keysquare.indexOf(a) % 5;
        row2 = parseInt(keysquare.indexOf(b) / 5);
        col2 = keysquare.indexOf(b) % 5;
        if (row1 == row2) {
            if (col1 == 4) c = keysquare.charAt(row1 * 5);
            else c = keysquare.charAt(row1 * 5 + col1 + 1);
            if (col2 == 4) d = keysquare.charAt(row2 * 5);
            else d = keysquare.charAt(row2 * 5 + col2 + 1);
        } else if (col1 == col2) {
            if (row1 == 4) c = keysquare.charAt(col1);
            else c = keysquare.charAt((row1 + 1) * 5 + col1);
            if (row2 == 4) d = keysquare.charAt(col2);
            else d = keysquare.charAt((row2 + 1) * 5 + col2);
        } else {
            c = keysquare.charAt(row1 * 5 + col2);
            d = keysquare.charAt(row2 * 5 + col1);
        }

        ciphertext += c + d;
    }
    return ciphertext.toUpperCase();
};