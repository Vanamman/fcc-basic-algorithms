function sortArray(a, b) {
  return a - b;
}

function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort(sortArray).indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 3));


/** ES6 Implementation
 function getIndexToIns(arr, num) {
      arr.push(num);
      return arr.sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([3, 10, 5], 3);
 **/
