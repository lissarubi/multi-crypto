binary = require('./ciphers/binary')
morse = require('./ciphers/morse')
ceaser = require('./ciphers/ceaser')
atBash = require('./ciphers/atbash')
affine = require('./ciphers/affine')
autokey = require('./ciphers/autokey')
baconian = require('./ciphers/baconian')
base64 = require('./ciphers/base64')
viginere = require('./ciphers/viginere')

exports.encryptBinary = (text) => {
    return binary.encryptBinary(text)
}
exports.decryptBinary = (binaryText) => {
    return binary.decryptBinary(binaryText)
}
exports.encryptMorse = (text) => {
    return morse.encryptMorse(text)
}
exports.decryptMorse = (morseText) => {
    return morse.decryptMorse(morseText)
}
exports.encryptCeaser = (text, shift) => {
    return ceaser.encryptCeaser(text, shift)
}
exports.bruteDecryptCeaser = (text) => {
    return ceaser.bruteDecryptCeaser(text)
}
exports.brutedecryptCeaser = (text) => {
    return ceaser.bruteDecryptCeaser(text)
}
exports.encryptAtBash = (text) => {
    return atBash.encryptAtBash(text)
}
exports.decryptAtBash = (text) => {
    return atBash.decryptAtBash(text)
}
exports.encryptAffine = (text, a, b) => {
    return affine.encryptAffine(text, a, b)
}
exports.decryptAffine = (text, a, b) => {
    return affine.decryptAffine(text, a, b)
}
exports.encryptAutoKey = (text, key) => {
    return autokey.encryptAutoKey(text, key)
}
exports.decryptAutoKey = (autoKeyText, key) => {
    return autokey.decryptAutoKey(autoKeyText, key)
}
exports.encryptBaconian = (text, alphabet) => {
    return baconian.encryptBaconian(text, alphabet)
}
exports.decryptBaconian = (text, alphabet) => {
    return baconian.decryptBaconian(text, alphabet)
}
exports.encryptBase64 = (text) => {
    return base64.encryptBase64(text)
}
exports.decryptBase64 = (base64Text) => {
    return base64.decryptBase64(base64Text)
}
exports.encryptViginere = (text, key) => {
    return viginere.encryptViginere(text, key)
}
exports.decryptViginere = (viginereText, key) => {
    return viginere.decryptViginere(viginereText, key)
}