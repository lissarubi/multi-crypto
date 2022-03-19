exports.encryptColumnarTransposition = (text, key, padChar = 'x') => {
    plaintext = text.toLowerCase().replace(/[^a-z]/g, '');
    var key = key.toLowerCase().replace(/[^a-z]/g, '');
    var pc = padChar.toLowerCase().replace(/[^a-z]/g, '');
    if (pc == '') pc = 'x';
    while (plaintext.length % key.length != 0) plaintext += pc.charAt(0);
    var colLength = plaintext.length / key.length;
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    columnarTranspositionText = '';
    k = 0;
    for (i = 0; i < key.length; i++) {
        while (k < 26) {
            t = key.indexOf(chars.charAt(k));
            arrkw = key.split('');
            arrkw[t] = '_';
            key = arrkw.join('');
            if (t >= 0) break;
            else k++;
        }
        for (j = 0; j < colLength; j++)
            columnarTranspositionText += plaintext.charAt(j * key.length + t);
    }
    return columnarTranspositionText;
};