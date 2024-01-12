// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    let commonStrs = [];

    for (let i = 0; i < array1.length; i++) {
        // Checks if the 2nd array has what current array1 item is. Also makes sure it already wasn't added.
        if (array2.includes(array1[i]) && !commonStrs.includes(array1[i])) {
            commonStrs.push(array1[i]);
        }
    }

    return commonStrs;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    let areDivisible = [];
     
    for (let i = 1; i <= 100; i++) {
        if (i % a === 0 || i % b === 0 || i % c === 0) {
            areDivisible.push(i)
        }
    }

    return areDivisible;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let returnStr = "";
    let letters = string.split("");
    let currentCount = 1

    for (let i = 0; i < letters.length; i++) {
        console.log(`i: ${letters[i]}, i + 1: ${letters[i + 1]}`)
        if (letters[i] === letters[i + 1]) {
            currentCount += 1
        } else {
            if (currentCount > 1) {
                returnStr += String(currentCount) + letters[i];
            } else {
                returnStr += letters[i];
            }
            currentCount = 1
        }
    }

    return returnStr;
}

export { commonStrings, compressString, divisibleByEither };
