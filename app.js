$(document).ready(function(){

  // turn variable will determine X or O & begin with X
  var turn = 1;
  var x = "<h1>X</h1>";
  var o = "<h1>O</h1>";
  var userValues = [];


  // As each custom-box div is clicked...
  $(".custom-box").on("click", function(){

    if ($(this).html()===""){
      // console.log("empty"); <-- Test to see if console displays "empty" on empty cells
      if(turn===1){
        $(this).html(x);
        //update turn variable to ensure next click will be 'O'
        turn = 0;
      } else if (turn===0){
        $(this).html(o);
        turn = 1;
      }


      // Storing X & O values in an array
      userValues = $(".custom-box > div").get();
      console.log(userValues[0]);
      // console.log(userValues[1]);
      // console.log(userValues[2]);
      // console.log(userValues[3]);
      // console.log(userValues[4]);
      // console.log(userValues[5]);
      // console.log(userValues[6]);
      // console.log(userValues[7]);
      // console.log(userValues[8]);

    } else{
      //display alert since the spot is already taken
      alert("Try again. This box is taken.");
    }
  });


  if (userValues[0]==="X" && userValues[1]==="X" && userValues[2]==="X" ){
    alert("winner!");
  }



});
