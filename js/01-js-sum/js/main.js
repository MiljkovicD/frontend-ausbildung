function sum2(num1, num2) {
    return num1 + num2;
}

console.log(sum2(5, 4));
console.log(sum2(6, 1));
console.log(sum2(2, 3));

function sum(numbers) {
    if (numbers.length <= 1) {
        let error = 'Bitte mindestens 2 Zahlen eingeben!';
        return error;
    } else {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }
}
console.log(sum([10, 20, 30, 40]));
console.log(sum([4, 27, 46, 4345, 345]));
console.log(sum([1]));

function sumWhile(numbers) {
    if (numbers.length <= 1) {
        let error = 'Bitte mindestens 2 Zahlen eingeben!';
        return error;
    } else {
        let result = 0;
        let i = 0;
        while (i < numbers.length) {
            result += numbers[i];
            i++;
        }
        return result;
    }
}

console.log(sumWhile([10, 20, 30, 40]));
console.log(sumWhile([4, 27, 46, 4345, 345]));
console.log(sumWhile([1]));

function sumForEach(numbers) {
    if (numbers.length <= 1) {
        let error = 'Bitte mindestens 2 Zahlen eingeben!';
        return error;
    } else {
        let result = 0;
        numbers.forEach(item => result += item);
        console.log(numbers);
        return result;
    }
}

console.log(sumForEach([10, 20, 30, 40]));