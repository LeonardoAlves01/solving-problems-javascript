function isValid(s) {
    const mappings = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const stack = [];

    for (let char of s) {
        if (mappings[char]) {
            // Se o caractere é um parêntese de fechamento
            const topElement = stack.length === 0 ? "#" : stack.pop();
            if (topElement !== mappings[char]) {
                return false; // Parênteses não correspondentes
            }
        } else {
            // Se o caractere é um parêntese de abertura, adicioná-lo à pilha
            stack.push(char);
        }
    }

    // A string é válida se a pilha estiver vazia no final
    return stack.length === 0;
}