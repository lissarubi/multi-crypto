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

exports.decryptViginere = (viginereText, key) => {
    viginereText = viginereText.toLowerCase();
    key = key.match(/[a-z]/gi).join('').toLowerCase();
    var text = '';
    var specialCharacterCount = 0;

    for (var i = 0; i < viginereText.length; i++) {
        var keyLetter = (i - specialCharacterCount) % key.length;
        var keyRow = VigenereCipher._tabulaRecta[key[keyLetter]];

        if (keyRow.indexOf(viginereText[i]) !== -1) {
            text += VigenereCipher._tabulaRecta.a[keyRow.indexOf(viginereText[i])];
        } else {
            text += viginereText[i];
            specialCharacterCount++;
        }
    }

    return text;
};