exports.encryptBinary = (text) => {
  const binary = require('./ciphers/binary');
  return binary.encryptBinary(text);
};

exports.decryptBinary = (binaryText) => {
  const binary = require('./ciphers/binary');
  return binary.decryptBinary(binaryText);
};

exports.encryptMorse = (text) => {
  const morse = require('./ciphers/morse');
  return morse.encryptMorse(text);
};

exports.decryptMorse = (morseText) => {
  const morse = require('./ciphers/morse');
  return morse.decryptMorse(morseText);
};

exports.encryptCeaser = (text, shift) => {
  const ceaser = require('./ciphers/ceaser');
  return ceaser.encryptCeaser(text, shift);
};

exports.bruteDecryptCeaser = (text) => {
  const ceaser = require('./ciphers/ceaser');
  return ceaser.bruteDecryptCeaser(text);
};

exports.encryptAtBash = (text) => {
  const atBash = require('./ciphers/atbash');
  return atBash.encryptAtBash(text);
};

exports.decryptAtBash = (text) => {
  const atBash = require('./ciphers/atbash');
  return atBash.decryptAtBash(text);
};

exports.encryptAffine = (text, a, b) => {
  const affine = require('./ciphers/affine');
  return affine.encryptAffine(text, a, b);
};

exports.decryptAffine = (text, a, b) => {
  const affine = require('./ciphers/affine');
  return affine.decryptAffine(text, a, b);
};

exports.encryptAutoKey = (text, key) => {
  const autokey = require('./ciphers/autokey');
  return autokey.encryptAutoKey(text, key);
};

exports.decryptAutoKey = (autoKeyText, key) => {
  const autokey = require('./ciphers/autokey');
  return autokey.decryptAutoKey(autoKeyText, key);
};

exports.encryptBaconian = (text, alphabet) => {
  const baconian = require('./ciphers/baconian');
  return baconian.encryptBaconian(text, alphabet);
};

exports.decryptBaconian = (text, alphabet) => {
  const baconian = require('./ciphers/baconian');
  return baconian.decryptBaconian(text, alphabet);
};

exports.encryptBase64 = (text) => {
  const base64 = require('./ciphers/base64');
  return base64.encryptBase64(text);
};

exports.decryptBase64 = (base64Text) => {
  const base64 = require('./ciphers/base64');
  return base64.decryptBase64(base64Text);
};

exports.encryptViginere = (text, key) => {
  const viginere = require('./ciphers/viginere');
  return viginere.encryptViginere(text, key);
};

exports.decryptViginere = (viginereText, key) => {
  const viginere = require('./ciphers/viginere');
  return viginere.decryptViginere(viginereText, key);
};

exports.encryptRailFence = (text, key) => {
  const railFence = require('./ciphers/railFence');
  return railFence.encryptRailFence(text, key);
};

exports.decryptRailFence = (text, key) => {
  const railFence = require('./ciphers/railFence');
  return railFence.decryptRailFence(text, key);
};

exports.encryptSimpleSubstitution = (text, alphabet) => {
  const simpleSubstitution = require('./ciphers/simpleSubstitution');
  return simpleSubstitution.encryptSimpleSubstitution(text, alphabet);
};

exports.decryptSimpleSubstitution = (SSText, alphabet) => {
  const simpleSubstitution = require('./ciphers/simpleSubstitution');
  return simpleSubstitution.decryptSimpleSubstitution(SSText, alphabet);
};

exports.encryptColumnarTransposition = (text, key, padChar = 'x') => {
  const columnarTransposition = require('./ciphers/columnarTransposition');
  return columnarTransposition.encryptColumnarTransposition(
    text,
    key,
    (padChar = 'x'),
  );
};

exports.decryptColumnarTransposition = (columnarTranspositionText, key) => {
  const columnarTransposition = require('./ciphers/columnarTransposition');
  return columnarTransposition.decryptColumnarTransposition(
    columnarTranspositionText,
    key,
  );
};

exports.encryptPorta = (text, key) => {
  const porta = require('./ciphers/porta');
  return porta.encryptPorta(text, key);
};

exports.decryptPorta = (text, key) => {
  const porta = require('./ciphers/porta');
  return porta.decryptPorta(text, key);
};

exports.encryptHill = (text, key) => {
  const hill = require('./ciphers/hill');
  return hill.encryptHill(text, key);
};

exports.decryptHill = (text, key) => {
  const hill = require('./ciphers/hill');
  return hill.decryptHill(text, key);
};

exports.encryptFourSquare = (text, key1, key2) => {
  const fourSquare = require('./ciphers/fourSquare');
  return fourSquare.encryptFourSquare(text, key1, key2);
};

exports.decryptFourSquare = (Ntext, key1, key2) => {
  const fourSquare = require('./ciphers/fourSquare');
  return fourSquare.decryptFourSquare(text, key1, key2);
};

exports.encryptPlayfair = (text, keysquare) => {
  const playfair = require('./ciphers/playfair');
  return playfair.encryptPlayfair(text, keysquare);
};

exports.decryptPlayfair = (text, keysquare) => {
  const playfair = require('./ciphers/playfair');
  return playfair.decryptPlayfair(text, keysquare);
};

exports.encryptAdfgvx = (text, keysquare, keyword) => {
  const adfgvx = require('./ciphers/adfgvx');
  return adfgvx.encryptAdfgvx(text, keysquare, keyword);
};

exports.decryptAdfgvx = (adfgvxText, keysquare, keyword) => {
  const adfgvx = require('./ciphers/adfgvx');
  return adfgvx.decryptAdfgvx(adfgvxText, keysquare, keyword);
};

exports.encryptAdfgx = (text, keysquare, keyword) => {
  const adfgx = require('./ciphers/adfgx');
  return adfgx.encryptAdfgx(text, keysquare, keyword);
};

exports.decryptAdfgx = (adfgxText, keysquare, keyword) => {
  const adfgx = require('./ciphers/adfgx');
  return adfgx.decryptAdfgx(adfgxText, keysquare, keyword);
};

exports.encryptBifid = (text, keysquare, period) => {
  const bifid = require('./ciphers/bifid')
  return bifid.encryptBifid(text, keysquare, period)
}

exports.decryptBifid = (bifidText, keysquare, period) => {
  const bifid = require('./ciphers/bifid')
  return bifid.decryptBifid(bifidText, keysquare, period)
}