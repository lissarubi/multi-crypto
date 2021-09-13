exports.decryptBase64 = (base64Text) => {
    var e = {},
        i,
        k,
        v = [],
        text = '',
        w = String.fromCharCode;
    var n = [
        [65, 91],
        [97, 123],
        [48, 58],
        [43, 44],
        [47, 48],
    ];

    for (z in n) {
        for (i = n[z][0]; i < n[z][1]; i++) {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }

    for (i = 0; i < base64Text.length; i += 72) {
        var b = 0,
            c,
            x,
            l = 0,
            o = base64Text.substring(i, i + 72);
        for (x = 0; x < o.length; x++) {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                text += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return text;
};