exports.encryptBinary = (text) => {
    let binaryText = '';

    for (var i = 0; i < text.length; i++) {
        binaryText += text[i].charCodeAt(0).toString(2) + ' ';
    }

    return binaryText;
};