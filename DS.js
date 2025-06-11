// PROBLEM 1

function sumDistinctElements(set1, set2) {
    let sum = 0;

    // Check elements in set1 that are not in set2
    for (const element of set1) {
        if (!set2.includes(element)) {
            sum += element;
        }
    }

    // Check elements in set2 that are not in set1
    for (const element of set2) {
        if (!set1.includes(element)) {
            sum += element;
        }
    }

    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log(sumDistinctElements(set1, set2)); // Output: 13 (4 + 7 + 2)



// PROBLEM 2 Number 1

function dotProductProcedure(v1, v2, result) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    result.ps = ps; // Store result in the passed object
}

// Example usage:
const v1 = [1, 2, 3];
const v2 = [4, 5, 6];
const result = {};
dotProductProcedure(v1, v2, result);
console.log(result.ps); // Output: 32 (1*4 + 2*5 + 3*6)



// PROBLEM 2 Number 2

function areVectorsOrthogonal(v1, v2) {
    const result = {};
    dotProductProcedure(v1, v2, result);
    return result.ps === 0;
}

// Example usage:
const orthogonalVector1 = [1, 0];
const orthogonalVector2 = [0, 1];
console.log(areVectorsOrthogonal(orthogonalVector1, orthogonalVector2)); // Output: true



// PROBLEM 2 Number 3

function dotProductFunction(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function areVectorsOrthogonalFunction(v1, v2) {
    return dotProductFunction(v1, v2) === 0;
}

// Example usage:
console.log(areVectorsOrthogonalFunction([1, 0], [0, 1])); // Output: true
console.log(areVectorsOrthogonalFunction([1, 1], [1, 1])); // Output: false



// Full Algorithm for n Paris of Vector

function checkOrthogonalityForNPairs(vectorPairs) {
    const results = [];
    for (const [v1, v2] of vectorPairs) {
        results.push(dotProductFunction(v1, v2) === 0);
    }
    return results;
}

// Example usage:
const vectorPairs = [
    [[1, 0], [0, 1]], // Orthogonal
    [[1, 2], [2, -1]], // Orthogonal (1*2 + 2*(-1) = 0)
    [[1, 1], [1, 1]]   // Not orthogonal (1*1 + 1*1 = 2)
];
console.log(checkOrthogonalityForNPairs(vectorPairs)); // Output: [true, true, false]