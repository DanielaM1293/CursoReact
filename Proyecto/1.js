// Mapeo de símbolos encriptados a caracteres en español
const decryptionMap = {
    "?": "a",
    "[": "e",
    "\\": "i",
    "~": "o",
    "+": "u",
    "^": "m",
    "`": "c",
    "*": "p",
    "/": "l",
    "¿": "y",
    "#": "v",
    "$": "r",
    "%": "b",
    "]": "n",
    "-": "h",
    "()": " ", // espacio en blanco
    "=": "t",
    "{": "s",
    "}": "q",
    "¬": "ó"
  };
  
  // Mensaje encriptado
  const encryptedMessage = `A[()^~*?/{[)(]++- 
  [-][*]~[=][a]([=][?%?][=][b]~[=][?][=][c]~[=][d]~[=][e]~[=][f]~[=][g]~[=][h]~[=][i] 
  [)(][1][(][2][(][3][(][4][(][5][(][6][(][7][(][8][(][9][(][0][~][1][~][2][~][3][~][4][~][5][~][6][~][7][~][8][~][9][~][0]~[1]~[2]~[3]~[4]~[5]~[6]~[7]~[8]~[9]~[0]`;
  
  // Función de desencriptación
  function decryptMessage(encrypted) {
    return encrypted.replace(/\(\)|./g, char => decryptionMap[char] || char);
  }
  
  // Resultado de la desencriptación
  const decryptedMessage = decryptMessage(encryptedMessage);
  console.log(decryptedMessage);
  