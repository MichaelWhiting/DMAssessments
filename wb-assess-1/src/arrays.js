// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let returnArr = [];
  for (const num of numbers) {
    if (num > 10) {
      returnArr.push(num);
    }
  }

  return returnArr;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let returnArr = [];

  for(const word of words) {
    if (word[0].toLowerCase() === 'b') {
      returnArr.push(word)
    }
  }
  return returnArr;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for (const item of additionalItems) {
    originalArray.push(item);
  }

  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let returnArr = [];
  for (const item of items) {
    if (item.length === length) {
      returnArr.push(item);
    }
  }

  return returnArr;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let returnArr = [];

  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      returnArr.push(items[i]);
    }
  }

  return returnArr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let returnArr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) {
      returnArr.push(i)
    }
  }

  return returnArr;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let returnArr = [];
  items.sort((a,b) => a - b);

  for (let i = 0; i < n; i++) {
    returnArr.unshift(items[i]);
  }

  return returnArr;
}
;

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) {
      return i;
    }
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let returnArr = [];

  for (let i = start; i <= stop; i++) {
    returnArr.push(i);
  }

  return returnArr;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};

// sort array low to high
// myArray.sort((a,b) => a - b);

// create a new string form each element in an array
// let name = ["s", "e", "a", "n"];
// --> "sean"

// let returnString = ""

// for (let i = 0; i < name.length; i++) {
//   returnString += name[i];
// }