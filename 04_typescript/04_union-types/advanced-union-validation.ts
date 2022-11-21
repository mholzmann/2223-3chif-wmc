const input: number = 6;

type NumericGrade = 1 | 2 | 3 | 4 | 5;

function validateGrade(value: number): value is NumericGrade {
    // return value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
    return [1, 2, 3, 4, 5].includes(value);
}

if (validateGrade(input)) {
    let grade: NumericGrade = input;

    if (grade === 5) {
        console.log('negative');
    } else {
        console.log('positive');
    }
} else {
    console.error('not a valid grade');
}