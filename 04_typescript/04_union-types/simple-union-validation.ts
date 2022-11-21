const input: number = 6;

type NumericGrade = 1 | 2 | 3 | 4 | 5;

if (input === 1 || input === 2 || input === 3 || input === 4 || input === 5) {
    let grade: NumericGrade = input;

    if (grade === 5) {
        console.log('negative');
    } else {
        console.log('positive');
    }
} else {
    console.error('not a valid grade');
}