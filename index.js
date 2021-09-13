// Binary
exports.encryptBinary = (text) => {
    const binary = require('./binary/encrypt');
    return binary.encryptBinary(text);
};

exports.decryptBinary = (binaryText) => {
    const binary = require('./binary/decrypt');
    return binary.decryptBinary(binaryText);
};

// Morse
exports.encryptMorse = (text) => {
    const morse = require('./morse/encrypt');
    return morse.encryptMorse(text);
};

exports.decryptMorse = (morseText) => {
    const morse = require('./morse/decrypt');
    return morse.decryptMorse(morseText);
};

// Ceaser
exports.encryptCeaser = (text, shift) => {
    const ceaser = require('./ceaser/encrypt');
    return ceaser.encryptCeaser(text, shift);
};

exports.bruteDecryptCeaser = (text) => {
    const ceaser = require('./ceaser/bruteDecrypt');
    return ceaser.bruteDecryptCeaser(text);
};

// atBash
exports.encryptAtBash = (text) => {
    const atBash = require('./atbash/encrypt');
    return atBash.encryptAtBash(text);
};

exports.decryptAtBash = (text) => {
    const atBash = require('./atbash/decrypt');
    return atBash.decryptAtBash(text);
};

// Affine
exports.encryptAffine = (text, a, b) => {
    const affine = require('./affine/encrypt');
    return affine.encryptAffine(text, a, b);
};

exports.decryptAffine = (text, a, b) => {
    const affine = require('./affine/decrypt');
    return affine.decryptAffine(text, a, b);
};

// AutoKey
exports.encryptAutoKey = (text, key) => {
    const autokey = require('./autokey/encrypt');
    return autokey.encryptAutoKey(text, key);
};

exports.decryptAutoKey = (autoKeyText, key) => {
    const autokey = require('./autokey/decrypt');
    return autokey.decryptAutoKey(autoKeyText, key);
};

// Baconian
exports.encryptBaconian = (text, alphabet) => {
    const baconian = require('./baconian/encrypt');
    return baconian.encryptBaconian(text, alphabet);
};

exports.decryptBaconian = (text, alphabet) => {
    const baconian = require('./baconian/decrypt');
    return baconian.decryptBaconian(text, alphabet);
};

// Base64
exports.encryptBase64 = (text) => {
    const base64 = require('./base64/encrypt');
    return base64.encryptBase64(text);
};

exports.decryptBase64 = (base64Text) => {
    const base64 = require('./base64/decrypt');
    return base64.decryptBase64(base64Text);
};

// Viginere
exports.encryptViginere = (text, key) => {
    const viginere = require('./viginere/viginere');
    return viginere.encryptViginere(text, key);
};

exports.decryptViginere = (viginereText, key) => {
    const viginere = require('./viginere/viginere');
    return viginere.decryptViginere(viginereText, key);
};

// RailFence
exports.encryptRailFence = (text, key) => {
    const railFence = require('./railFence/encrypt');
    return railFence.encryptRailFence(text, key);
};

exports.decryptRailFence = (text, key) => {
    const railFence = require('./railFence/decrypt');
    return railFence.decryptRailFence(text, key);
};

// SimpleSubstitution
exports.encryptSimpleSubstitution = (text, alphabet) => {
    const simpleSubstitution = require('./simpleSubstitution/simpleSubstitution');
    return simpleSubstitution.encryptSimpleSubstitution(text, alphabet);
};

exports.decryptSimpleSubstitution = (SSText, alphabet) => {
    const simpleSubstitution = require('./simpleSubstitution/simpleSubstitution');
    return simpleSubstitution.decryptSimpleSubstitution(SSText, alphabet);
};

// ColumnarTransposition
exports.encryptColumnarTransposition = (text, key, padChar = 'x') => {
    const columnarTransposition = require('./columnarTransposition/encrypt');
    return columnarTransposition.encryptColumnarTransposition(
        text,
        key,
        (padChar = 'x'),
    );
};

exports.decryptColumnarTransposition = (columnarTranspositionText, key) => {
    const columnarTransposition = require('./columnarTransposition/decrypt');
    return columnarTransposition.decryptColumnarTransposition(
        columnarTranspositionText,
        key,
    );
};

// Porta
exports.encryptPorta = (text, key) => {
    const porta = require('./porta/encrypt');
    return porta.encryptPorta(text, key);
};

exports.decryptPorta = (text, key) => {
    const porta = require('./porta/decrypt');
    return porta.decryptPorta(text, key);
};

// Hill
exports.encryptHill = (text, key) => {
    const hill = require('./hill/encrypt');
    return hill.encryptHill(text, key);
};

exports.decryptHill = (text, key) => {
    const hill = require('./hill/decrypt');
    return hill.decryptHill(text, key);
};

// Foursquare
exports.encryptFourSquare = (text, key1, key2) => {
    const fourSquare = require('./fourSquare/encrypt');
    return fourSquare.encryptFourSquare(text, key1, key2);
};

exports.decryptFourSquare = (Ntext, key1, key2) => {
    const fourSquare = require('./fourSquare/decrypt');
    return fourSquare.decryptFourSquare(text, key1, key2);
};

// Playfair
exports.encryptPlayfair = (text, keysquare) => {
    const playfair = require('./playfair/encrypt');
    return playfair.encryptPlayfair(text, keysquare);
};

exports.decryptPlayfair = (text, keysquare) => {
    const playfair = require('./playfair/decrypt');
    return playfair.decryptPlayfair(text, keysquare);
};

// Adfgvx
exports.encryptAdfgvx = (text, keysquare, keyword) => {
    const adfgvx = require('./adfgvx/encrypt');
    return adfgvx.encryptAdfgvx(text, keysquare, keyword);
};

exports.decryptAdfgvx = (adfgvxText, keysquare, keyword) => {
    const adfgvx = require('./adfgvx/decrypt');
    return adfgvx.decryptAdfgvx(adfgvxText, keysquare, keyword);
};

// Adfgx
exports.encryptAdfgx = (text, keysquare, keyword) => {
    const adfgx = require('./adfgx/encrypt');
    return adfgx.encryptAdfgx(text, keysquare, keyword);
};

exports.decryptAdfgx = (adfgxText, keysquare, keyword) => {
    const adfgx = require('./adfgx/decrypt');
    return adfgx.decryptAdfgx(adfgxText, keysquare, keyword);
};

// Bifid
exports.encryptBifid = (text, keysquare, period) => {
    const bifid = require('./bifid/encrypt')
    return bifid.encryptBifid(text, keysquare, period)
}

exports.decryptBifid = (bifidText, keysquare, period) => {
    const bifid = require('./bifid/decrypt')
    return bifid.decryptBifid(bifidText, keysquare, period)
}