exports.encryptAffine = (text, a, b) => {
    var word, newword, code, newcode, newletter;
    var addkey, multkey;
    word = text;
    word = word.toLowerCase();
    word = word.replace(/\W/g, '');
    multkey = a;
    addkey = b;
    newword = '';
    for (i = 0; i < word.length; i++) {
        code = word.charCodeAt(i) - 97;
        newcode = ((multkey * code + addkey) % 26) + 97;
        newletter = String.fromCharCode(newcode);
        newword = newword + newletter;
    }
    return newword;
};