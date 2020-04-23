# Multi Crypto

Multi Crypto is a node lib to cryptography text, encode and decode, **but, how i can use it?**

```node
npm install multi-crypto```

and

```node
const multiCrypto = require('multi-crypto')

//for example, enconding a text to binary
const MyText = multiCrypto.encodeBinary('This is my text')

//and decode binary
const MyBinary = multiCrypto.decodeBinary(
1010100 1101000 1101001 1110011 100000 1101001 1110011 100000 1101101 1111001 100000 1110100 1100101 1111000 1110100
)

```

# Ciphers List

## Binary

```node
multiCrypto.encodeBinary(text)
multiCrypto.decodeBinary(binary)
```

## Morse

```node
multiCrypto.encodeMorse(text)
multiCrypto.decodeMorse(morse)
```

---

Created with love by Ederson Ferreira (Brazil) :green_heart:
