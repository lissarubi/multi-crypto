exports.encryptAdfgx = (text, keysquare, keyword) => {
    var plaintext, ciphertext, keysquare, keyword;
    plaintext = text.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, '');
    keysquare = keysquare
        .toLowerCase()
        .replace(/[^abcdefghiklmnopqrstuvwxyz]/g, '');
    keyword = keyword.toLowerCase().replace(/[^a-z]/g, '');
    if (keysquare.length != 25) {
        return 'keysquare must be 25 characters in length containing letters a-z (no j)';
    }
    if (keyword.length <= 1) {
        return 'keyword should be at least 2 characters long';
    }
    adfgvx = 'ADFGX';
    ciphertext1 = '';
    for (i = 0; i < plaintext.length; i++) {
        index = keysquare.indexOf(plaintext.charAt(i));
        ciphertext1 += adfgvx.charAt(index / 5) + adfgvx.charAt(index % 5);
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