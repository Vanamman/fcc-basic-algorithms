function destroyer(arr) {
  var args = Array.from(arguments).slice(1);

  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
