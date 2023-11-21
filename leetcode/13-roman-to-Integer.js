const romanHash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const especialInstances = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let count = 0;

    for (const instance in especialInstances) {
        if (s.includes(instance)) {
            count += especialInstances[instance];
            s = s.replace(instance, "");
        }
    }

    for (const char of s) {
        count += romanHash[char];
    }

    return count;
};
