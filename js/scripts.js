  //  Business Logic

function boopNumber(inputNumberString) {
  var userNumber = parseInt(inputNumberString);
  var arrayNumbers = [];
  console.log(userNumber);
  console.log(typeof userNumber)
  console.log(typeof inputNumberString)
  for (var i = 0; i <= userNumber; i++) {
    if (i === 666) {
      arrayNumbers.push(i + " Hail Satan! " + i + ", ");
    } else {
      arrayNumbers.push(i + ", ");
    }
  }
  return arrayNumbers.join("");
}

  // if (i === 666) {
    //   console.log("Hail Satan!")
   // else if ((i % 3 === 0) && (i % 5 === 0)){
//     console.log("I'm sorry, Dave. I'm afraid I can't do that")
//   } else if (i % 3 === 0){
//     console.log("Boop!")
//   } else if (i % 5 === 0){
//     console.log("Beep!")
//   } else
//   console.log(i);
// }

  //  User Logic


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumberString = $("#inputNumber").val();
    var output = boopNumber(inputNumberString);
    $("#output").text(output);
  });
});
