
function mutation(arr) {
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();

  for (var i = 0; i < y.length; i++) {
    if (x.indexOf(y[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
