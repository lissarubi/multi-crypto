exports.encryptBinary = (text) => {
    binary = require('./ciphers/binary')
    return binary.encryptBinary(text)
}
exports.decryptBinary = (binaryText) => {
    binary = require('./ciphers/binary')
    return binary.decryptBinary(binaryText)
}
exports.encryptMorse = (text) => {
    morse = require('./ciphers/morse')
    return morse.encryptMorse(text)
}
exports.decryptMorse = (morseText) => {
    morse = require('./ciphers/morse')
    return morse.decryptMorse(morseText)
}
exports.encryptCeaser = (text, shift) => {
    ceaser = require('./ciphers/ceaser')
    return ceaser.encryptCeaser(text, shift)
}
exports.bruteDecryptCeaser = (text) => {
    ceaser = require('./ciphers/ceaser')
    return ceaser.bruteDecryptCeaser(text)
}
exports.encryptAtBash = (text) => {
    atBash = require('./ciphers/atbash')
    return atBash.encryptAtBash(text)
}
exports.decryptAtBash = (text) => {
    atBash = require('./ciphers/atbash')
    return atBash.decryptAtBash(text)
}
exports.encryptAffine = (text, a, b) => {
    affine = require('./ciphers/affine')
    return affine.encryptAffine(text, a, b)
}
exports.decryptAffine = (text, a, b) => {
    affine = require('./ciphers/affine')
    return affine.decryptAffine(text, a, b)
}
exports.encryptAutoKey = (text, key) => {
    autokey = require('./ciphers/autokey')
    return autokey.encryptAutoKey(text, key)
}
exports.decryptAutoKey = (autoKeyText, key) => {
    autokey = require('./ciphers/autokey')
    return autokey.decryptAutoKey(autoKeyText, key)
}
exports.encryptBaconian = (text, alphabet) => {
    baconian = require('./ciphers/baconian')
    return baconian.encryptBaconian(text, alphabet)
}
exports.decryptBaconian = (text, alphabet) => {
    baconian = require('./ciphers/baconian')
    return baconian.decryptBaconian(text, alphabet)
}
exports.encryptBase64 = (text) => {
    base64 = require('./ciphers/base64')
    return base64.encryptBase64(text)
}
exports.decryptBase64 = (base64Text) => {
    base64 = require('./ciphers/base64')
    return base64.decryptBase64(base64Text)
}
exports.encryptViginere = (text, key) => {
    viginere = require('./ciphers/viginere')
    return viginere.encryptViginere(text, key)
}
exports.decryptViginere = (viginereText, key) => {
    viginere = require('./ciphers/viginere')
    return viginere.decryptViginere(viginereText, key)
}
exports.encryptRailFence = (text, key) => {
    railFence = require('./ciphers/railFence')
    return railFence.encryptRailFence(text, key)
}
exports.decryptRailFence = (text, key) => {
    railFence = require('./ciphers/railFence')
    return railFence.decryptRailFence(text, key)
}
exports.encryptSimpleSubstitution = (text, alphabet) => {
    simpleSubstitution = require('./ciphers/simpleSubstitution')
    return simpleSubstitution.encryptSimpleSubstitution(text, alphabet)
}
exports.decryptSimpleSubstitution = (SSText, alphabet) => {
    simpleSubstitution = require('./ciphers/simpleSubstitution')
    return simpleSubstitution.decryptSimpleSubstitution(SSText, alphabet)
}