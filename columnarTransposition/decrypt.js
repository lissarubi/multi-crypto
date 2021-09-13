exports.decryptColumnarTransposition = (columnarTranspositionText, key) => {
    ciphertext = columnarTranspositionText.toLowerCase().replace(/[^a-z]/g, '');
    keyword = key.toLowerCase().replace(/[^a-z]/g, '');
    klen = keyword.length;
    if (klen <= 1) {
        return 'keyword should be at least 2 characters long';
    }
    if (ciphertext.length % klen != 0) {
        return 'ciphertext has not been padded, the result may be incorrect (incorrect keyword?).';
    }
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for (i = 0; i < klen; i++)
        cols[i] = ciphertext.substr(i * colLength, colLength);
    var newcols = new Array(klen);
    chars = 'abcdefghijklmnopqrstuvwxyz';
    j = 0;
    i = 0;
    while (j < klen) {
        t = keyword.indexOf(chars.charAt(i));
        if (t >= 0) {
            newcols[t] = cols[j++];
            arrkw = keyword.split('');
            arrkw[t] = '_';
            keyword = arrkw.join('');
        } else i++;
    }
    text = '';
    for (i = 0; i < colLength; i++) {
        for (j = 0; j < klen; j++) text += newcols[j].charAt(i);
    }
    return text;
};