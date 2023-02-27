function GenerateFibonacci(number = 5) {
    if (typeof number === "number") {
        var fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        for (var i = 2; i < number; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci;
    } else {
        return `Eingabe '${number}' ist ungültig. Bitte eine Zahl eingeben.`;
    }
}

console.log(GenerateFibonacci());
console.log(GenerateFibonacci(10));
console.log(GenerateFibonacci('7'));
console.log(GenerateFibonacci('Dejan'));