/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Remove espaços vazios e transforma a string em Array
    const arr = s.trim().split(" ");
    // Pega a última posição do Array
    const last = arr.slice(- 1)[0];
    return last.length;
};