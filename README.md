# Multi Crypto

Multi Crypto is a node lib to cryptography text, encrypt and decrypt, **but, how i can use it?**
Simple:

```node
npm install multi-crypto
```

and

```node
const multiCrypto = require('multi-crypto')

//for example, enconding a text to binary
const MyText = multiCrypto.encryptBinary('This is my text')

//and Decrypt binary
const MyBinary = multiCrypto.DecryptBinary(
1010100 1101000 1101001 
1110011 100000 1101001 
1110011 100000 1101101 
1111001 100000 1110100 
1100101 1111000 1110100
)

```

# Ciphers List

## Binary

```node
multiCrypto.encryptBinary(text)

multiCrypto.DecryptBinary(binary)
```

## Morse

```node
multiCrypto.encryptMorse(text)

multiCrypto.DecryptMorse(morse)
```

## ceaser Cipher

```node
multiCrypto.encryptCeaser(text)

multiCrypto.bruteDecryptCeaser(text) // for show all possibilities
```

## atBash
```node
multiCrypto.encryptAtBash(text)

multiCrypto.decryptAtBash(text)
```

## Affine Cipher
```node
multiCrypto.encryptAffine(text, a, b) // a and b are numbers, like a = 5 and b = 7

multiCrypto.decryptAffine(text, a, b) // a and b are numbers, like a = 5 and b = 7
```

## Auto Key
```node
multiCrypto.encryptAutoKey(text, key) // key must be a string

multiCrypto.decryptAutoKet(text, key) // key must be a string
```

## Baconian Cipher
```node
multiCrypto.encryptBaconian(text, alphabet) // the default alphabet is ABCDEFGHIKLMNOPQRSTUWXYZ

multiCrypto.decryptBaconian(text, alphabet) // the default alphabet is ABCDEFGHIKLMNOPQRSTUWXYZ
```

## Base 64
```node
multiCrypto.encryptBase64(text)

multiCrypto.decryptBase64(base64Text)
```

## Viginere Cipher
```node
multiCrypto.encryptViginere(text, key) // key is like "abc"

multiCrypto.decryptViginere(text, key) // key is like "abc"
```

## Rail Fance
```node
multiCrypto.encryptRailFence(text, key) // key is a number, like 3

multiCrypto.decryptRailFence(text, key) // key is a number, like 3
```

## Simple Substitution
```node
multiCrypto.encryptSimpleSubstitution(text, alphabet)

multiCrypto.decryptSimpleSubstitution(text, alphabet)

// alphabet is like "dynoutmperlqbcwzvsagjfxikh"
```

## Columnar Transposition
```node
multiCrypto.encryptColumnarTransposition(text, key, padChar='x') // padChar is a letter, like "x"

multiCrypto.decryptColumnarTransposition(text, key) // you dont have to put padChar
```

## Porta Cipher
```node
multiCrypto.encryptPorta(text, key) // key is a word

multiCrypto.decryptPorta(text, key) // key is a word
```

## Hill Cipher
```node
multiCrypto.encryptHill(text, key) // key should be 4 numbers, like "5 17 4 15" in a string

multiCrypto.decryptHill(text, key) // key should be 4 numbers, like "5 17 4 15" in a string
```

## Four Square
```node
multiCrypto.encryptFourSquare(text, key1, key2)

multiCrypto.decryptFourSquare(text, key1, key2)

// the keys should be alphabets, like "zgptfoihmuwdrcnykeqaxvsbl" and "mfnbdcrhsaxyogvituewlqzkp"
```

---
NPM Page: https://www.npmjs.com/package/multi-crypto

GitHub: https://github.com/edersonferreira/multi-crypto

Created with love by Ederson Ferreira (Brazil) :green_heart:
