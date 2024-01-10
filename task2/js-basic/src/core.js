//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return ~~n == n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const array = [];
    for (let i = 2; i < 21; i += 2) {
        array.push(i);
    }
    //console.log(array);
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let ans = 0;
    for (let i = 1; i <= n; ++i) {
        ans += i;
    }
    return ans;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0) {
        return 0;
    } else {
        return recSumTo(n - 1) + n;
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let ans = 1;
    for (let i = 2; i <= n; ++i) {
        ans *= i;
    }
    return ans;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        let a = 1;
        let b = 1;
        let ans = 0;
        for (let i = 3; i <= n; ++i) {
            ans = a + b;
            a = b;
            b = ans;
        }
        return ans;
    }
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    if (!operatorFn) {
        return () => {
            return initialValue;
        };
    } else {
        return (newValue) => {
            return (storedValue = operatorFn(storedValue, newValue));
        };
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано то оно равно 0.
 * Если шаг не угазан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг полседовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    start = start ?? 0;
    step = step ?? 1;
    let storedValue = start - step;
    return () => {
        return (storedValue += step);
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй оббъект
 * @returns {boolean} - true если объекты равны(по сожержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }
    if (
        firstObject === null ||
        typeof firstObject != 'object' ||
        secondObject === null ||
        typeof secondObject != 'object'
    ) {
        return false;
    }

    let propsFirstObject = 0,
        propsSecondObject = 0;
    for (let prop in firstObject) {
        propsFirstObject += 1;
    }
    for (let prop in secondObject) {
        propsSecondObject += 1;
        if (
            !(prop in firstObject) ||
            !deepEqual(firstObject[prop], secondObject[prop])
        ) {
            return false;
        }
    }
    return propsFirstObject === propsSecondObject;
}
module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};