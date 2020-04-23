binary = require('./ciphers/binary')
morse = require('./ciphers/morse')

exports.encodeBinary = (text) => {
    console.log(binary.encodeBinary(text))
}

exports.decodeBinary = (binaryText) => {
    console.log(binary.decodeBinary(binaryText))
}

exports.encodeMorse = (text) => {
    console.log(morse.encodeMorse(text))
}

exports.decodeMorse = (morseText) => {
    console.log(morse.decodeMorse(morseText))
}