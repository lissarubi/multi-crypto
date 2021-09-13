exports.decryptAffine = (text, a, b) => {
    var word, newword, code, newcode, newletter;
    var addkey, multkey, multinverse;
    word = text;
    word = word.toLowerCase();
    word = word.replace(/\W/g, '');
    multkey = a;
    addkey = b;
    multinverse = 1;
    for (i = 1; i <= 25; i = i + 2) {
        if ((multkey * i) % 26 == 1) {
            multinverse = i;
        }
    }
    newword = '';
    for (i = 0; i < word.length; i++) {
        code = word.charCodeAt(i) - 97;
        newcode = ((multinverse * (code + 26 - addkey)) % 26) + 97;
        newletter = String.fromCharCode(newcode);
        newword = newword + newletter;
    }
    return newword;
};