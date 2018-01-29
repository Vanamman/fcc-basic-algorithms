function rot13(str) { // LBH QVQ VG!
    var x;
    var y = "";
    for (var i = 0; i < str.length; i++){
        if ((str.charCodeAt(i)) > 77) {
            x = (str.charCodeAt(i) - 13);
        } else if ((str.charCodeAt(i)) > 64 ){
            x = (str.charCodeAt(i) + 13);
        } else if (str.charCodeAt(i) < 64 || str.charCodeAt(i) > 90){
            x = str.charCodeAt(i);
        }
        y += String.fromCharCode(x);
    }
    return y;
}

  
  // Change the inputs below to test
  console.log(rot13("SERR CVMMN!"));
  