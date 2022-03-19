var VigenereCipher = {
    _tabulaRecta: {
        a: 'abcdefghijklmnopqrstuvwxyz',
        b: 'bcdefghijklmnopqrstuvwxyza',
        c: 'cdefghijklmnopqrstuvwxyzab',
        d: 'defghijklmnopqrstuvwxyzabc',
        e: 'efghijklmnopqrstuvwxyzabcd',
        f: 'fghijklmnopqrstuvwxyzabcde',
        g: 'ghijklmnopqrstuvwxyzabcdef',
        h: 'hijklmnopqrstuvwxyzabcdefg',
        i: 'ijklmnopqrstuvwxyzabcdefgh',
        j: 'jklmnopqrstuvwxyzabcdefghi',
        k: 'klmnopqrstuvwxyzabcdefghij',
        l: 'lmnopqrstuvwxyzabcdefghijk',
        m: 'mnopqrstuvwxyzabcdefghijkl',
        n: 'nopqrstuvwxyzabcdefghijklm',
        o: 'opqrstuvwxyzabcdefghijklmn',
        p: 'pqrstuvwxyzabcdefghijklmno',
        q: 'qrstuvwxyzabcdefghijklmnop',
        r: 'rstuvwxyzabcdefghijklmnopq',
        s: 'stuvwxyzabcdefghijklmnopqr',
        t: 'tuvwxyzabcdefghijklmnopqrs',
        u: 'uvwxyzabcdefghijklmnopqrst',
        v: 'vwxyzabcdefghijklmnopqrstu',
        w: 'wxyzabcdefghijklmnopqrstuv',
        x: 'xyzabcdefghijklmnopqrstuvw',
        y: 'yzabcdefghijklmnopqrstuvwx',
        z: 'zabcdefghijklmnopqrstuvwxy',
    },
};

exports.encryptViginere = (text, key) => {
    text = text.toLowerCase();
    key = key.match(/[a-z]/gi).join('').toLowerCase();
    var viginereText = '';
    var specialCharacterCount = 0;

    for (var i = 0; i < text.length; i++) {
        var keyLetter = (i - specialCharacterCount) % key.length;
        var keyIndex = VigenereCipher._tabulaRecta.a.indexOf(key[keyLetter]);

        if (VigenereCipher._tabulaRecta[text[i]]) {
            viginereText += VigenereCipher._tabulaRecta[text[i]][keyIndex];
        } else {
            viginereText += text[i];
            specialCharacterCount++;
        }
    }

    return viginereText;
};