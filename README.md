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
multiCrypto.encryptMorse(text, shift)

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

multiCrypto.decryptAffine(text, a, v) // a and b are numbers, like a = 5 and b = 7
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

---
NPM Page: https://www.npmjs.com/package/multi-crypto

GitHub: https://github.com/edersonferreira/multi-crypto

Created with love by Ederson Ferreira (Brazil) :green_heart:
