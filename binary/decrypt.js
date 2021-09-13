exports.decryptBinary = (binary) => {
    const text = binary
        .split(' ')
        .map((b) => parseInt(b, 2))
        .map((num) => String.fromCharCode(num))
        .join('');

    return text;
};