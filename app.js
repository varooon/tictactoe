$(document).ready(function(){

  // turn variable will determine X or O & begin with X
  var turn = 1;
  var x = "<div id='x'><h1>X</h1></div>";
  var o = "<div id='o'><h1>O</h1></div>";


  // As each custom-box div is clicked...
  $(".custom-box").on("click", function(){

    if ($(this).html()===""){
      // console.log("empty"); <-- Test to see if console displays "empty" on empty cells
      if(turn===1){
        $(this).html(x);
        console.log($("#one"));
        //update turn variable to ensure next click will be 'O'
        turn = 0;
      } else if (turn===0){
        $(this).html(o);
        turn = 1;
      }
    } else{
      //display message since the spot is already taken
      console.log("Try again. This box is taken.");
    }
  });



});
