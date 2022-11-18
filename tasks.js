// Startseva Alyona

// Задача про черепашку
// Ответ = 4
const calculateNumberOfDays = (hilltop, stepByDay, stepByNight) => {
    let numberOfDays = 0;
    let currentHeight = 0;

    while (currentHeight < hilltop) {
        currentHeight += stepByDay;
        numberOfDays++;

        if (currentHeight < hilltop) {
            currentHeight -= stepByNight;
        } else break;
    }

    return numberOfDays;
};

const numberOfDays = calculateNumberOfDays(100, 50, 30);

// Задача про рукопожатия
// Ответ = 45
const ONE_HANDSHAKE = 2;

const calculateFactorial = (n) => n ? n * calculateFactorial(n - 1) : 1;

const calculateNumberOfHandshakes = (numberOfPersons) =>
    numberOfPersons > 1 ? calculateFactorial(numberOfPersons) / calculateFactorial(ONE_HANDSHAKE) / calculateFactorial(numberOfPersons - ONE_HANDSHAKE) : 'Для подсчёта количества рукопожатий количество человек должно быть больше одного';

const numberOfHandShakes = calculateNumberOfHandshakes(10);

// Задача про удаление дублей из строки
const getStringWithoutDuplicates = (lineWithDuplicates) => {
    const wordsString = lineWithDuplicates.split(',');
    const resultWords = [];
    
    wordsString.forEach(w => {
        if (!resultWords.includes(w)) {
            resultWords.push(w);
        }
    });

    return resultWords.join(',');
};

const stringWithoutDuplicates = getStringWithoutDuplicates('кошка,собака,лошадь,корова,кошка,кошка,кошка,корова');
