exports.encryptPorta = (text, key) => {
    plaintext = text.toLowerCase().replace(/[^a-z]/g, "");  
    k = key.toLowerCase().replace(/[^a-z]/g, ""); 
    if(k.length <= 1){ return "keyword should be at least 2 characters long" }
    ciphertext="";
    for(i=0; i<plaintext.length; i++){ 
            j = i%k.length;
            if      ((k[j] == 'a') || (k[j] == 'b')) ciphertext += 'nopqrstuvwxyzabcdefghijklm'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'y') || (k[j] == 'z')) ciphertext += 'znopqrstuvwxybcdefghijklma'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'w') || (k[j] == 'x')) ciphertext += 'yznopqrstuvwxcdefghijklmab'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'u') || (k[j] == 'v')) ciphertext += 'xyznopqrstuvwdefghijklmabc'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 's') || (k[j] == 't')) ciphertext += 'wxyznopqrstuvefghijklmabcd'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'q') || (k[j] == 'r')) ciphertext += 'vwxyznopqrstufghijklmabcde'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'o') || (k[j] == 'p')) ciphertext += 'uvwxyznopqrstghijklmabcdef'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'm') || (k[j] == 'n')) ciphertext += 'tuvwxyznopqrshijklmabcdefg'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'k') || (k[j] == 'l')) ciphertext += 'stuvwxyznopqrijklmabcdefgh'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'i') || (k[j] == 'j')) ciphertext += 'rstuvwxyznopqjklmabcdefghi'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'g') || (k[j] == 'h')) ciphertext += 'qrstuvwxyznopklmabcdefghij'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'e') || (k[j] == 'f')) ciphertext += 'pqrstuvwxyznolmabcdefghijk'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'c') || (k[j] == 'd')) ciphertext += 'opqrstuvwxyznmabcdefghijkl'[plaintext.charCodeAt(i)-97];
    } 
    return ciphertext; 
}
exports.decryptPorta = (portaText, key) => {
    ciphertext = portaText.toLowerCase().replace(/[^a-z]/g, "");  
    k = key.toLowerCase().replace(/[^a-z]/g, ""); 
    // do some error checking 
    if(k.length <= 1){ return "keyword should be at least 2 characters long" }
    text="";
    for(i=0; i<ciphertext.length; i++){ 
            j = i%k.length;
            //alert(j + ' ' + k[j]+' '+text[i])
            if      ((k[j] == 'a') || (k[j] == 'b')) text += 'nopqrstuvwxyzabcdefghijklm'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'y') || (k[j] == 'z')) text += 'znopqrstuvwxybcdefghijklma'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'w') || (k[j] == 'x')) text += 'yznopqrstuvwxcdefghijklmab'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'u') || (k[j] == 'v')) text += 'xyznopqrstuvwdefghijklmabc'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 's') || (k[j] == 't')) text += 'wxyznopqrstuvefghijklmabcd'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'q') || (k[j] == 'r')) text += 'vwxyznopqrstufghijklmabcde'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'o') || (k[j] == 'p')) text += 'uvwxyznopqrstghijklmabcdef'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'm') || (k[j] == 'n')) text += 'tuvwxyznopqrshijklmabcdefg'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'k') || (k[j] == 'l')) text += 'stuvwxyznopqrijklmabcdefgh'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'i') || (k[j] == 'j')) text += 'rstuvwxyznopqjklmabcdefghi'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'g') || (k[j] == 'h')) text += 'qrstuvwxyznopklmabcdefghij'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'e') || (k[j] == 'f')) text += 'pqrstuvwxyznolmabcdefghijk'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'c') || (k[j] == 'd')) text += 'opqrstuvwxyznmabcdefghijkl'[ciphertext.charCodeAt(i)-97];
    } 
    return text;
}