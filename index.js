binary = require('./ciphers/binary')
morse = require('./ciphers/morse')
ceaser = require('./ciphers/ceaser')
atBash = require('./ciphers/atbash')
affine = require('./ciphers/affine')

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