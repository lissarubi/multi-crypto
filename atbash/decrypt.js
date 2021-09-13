exports.decryptAtBash = (text) => {
    var alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    var tebahpla = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var alphabet1 = 'zyxwvutsrqponmlkjihgfedcba';
    var tebahpla1 = 'abcdefghijklmnopqrstuvwxyz';
    var atBashText = '';

    for (var i = 0; i < text.length; i++) {
        var coded_letra = text.charAt(i);

        if (/[^a-zA-Z]/.test(text[i])) {
            atBashText = atBashText + text[i];
        } else if (text[i] === text[i].toUpperCase()) {
            var letraPosMayus = alphabet.indexOf(coded_letra);
            var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
            atBashText = atBashText + tebLetraPosMayus;
        } else {
            var letraPosMinus1 = alphabet1.indexOf(coded_letra);
            var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
            atBashText = atBashText + tebLetraPosMinus1;
        }
    }
    return atBashText;
};