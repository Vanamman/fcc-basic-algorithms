function rot13(str) { // LBH QVQ VG!
    var x;
    var y = "";
    for (var i = 0; i < str.length; i++){
        var char = str.charCodeAt(i);
        if ((char) > 77) {
            x = (char - 13);
        } else if ((char) > 64 ){
            x = (char + 13);
        } else if (char < 64 || char > 90){
            x = char;
        }
        y += String.fromCharCode(x);
    }
    return y;
}

  
  // Change the inputs below to test
  console.log(rot13("SERR CVMMN!"));
  