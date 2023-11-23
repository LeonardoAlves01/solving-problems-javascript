/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // Se o caractere já existe no mapa e está dentro da janela atual, atualize a posição inicial
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      start = charIndexMap[currentChar] + 1;
    }

    // Atualize a posição do caractere no mapa
    charIndexMap[currentChar] = end;
    // Atualize o comprimento máximo da substring sem repetir
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
