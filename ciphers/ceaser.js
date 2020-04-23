exports.encryptCeaser = (text, shift) => {
    if (shift < 0)
		return caesarShift(text, shift + 26);

	var ceaserText = '';

	for (var i = 0; i < text.length; i ++) {

		var c = text[i];

		if (c.match(/[a-z]/i)) {

			var code = text.charCodeAt(i);

			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + shift) % 26) + 65);

			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + shift) % 26) + 97);

        }
        
		ceaserText += c;

	}

	return ceaserText;
}

exports.bruteDecryptCeaser = (text) => {
    var texts = []

    for (var c = 1; c <= 26; c++){
        texts.push(this.encodeCeaser(text, c))
    }
    return texts
}