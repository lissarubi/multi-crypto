exports.encryptBifid = (text, keysquare, period) => {
    period = String(period)
    plaintext = text.toLowerCase().replace(/[^a-z]/g, "").replace(/[j]/g, "i");
    keysquare = keysquare.toLowerCase().replace(/[^a-z]/g, "");
    if (keysquare.length != 25) { return "keysquare must be 25 characters in length" }
    if (keysquare.indexOf("j") >= 0) { return "key should not contain letter j (combine with i)." }
    period = parseInt(period.replace(/[^0-9]/g, ""));
    if (isNaN(period)) { return "period should be an integer" }
    if (period <= 0) { alert("period should greater than 0"); return; };
    ind = "12345";
    ct1 = "";
    ct2 = "";
    for (i = 0; i < plaintext.length; i++) {
        index = keysquare.indexOf(plaintext.charAt(i));
        ct1 += ind.charAt(index / 5);
        ct2 += ind.charAt(index % 5);
    }
    i = 0;
    ct3 = "";
    bit = ct1.substr(i, period);
    while (bit.length > 0) {
        ct3 += bit + ct2.substr(i, period);
        i += period;
        bit = ct1.substr(i, period);
    }
    ciphertext = "";
    for (i = 0; i < ct3.length; i += 2) { ciphertext += keysquare.charAt((parseInt(ct3.charAt(i)) - 1) * 5 + parseInt(ct3.charAt(i + 1) - 1)); }
    return ciphertext;
}