//User Interface logic
//Submission of Player One Details & Navigating to playing board
$(document).ready(function(){
  $(".player-one").submit(function(event){
    event.preventDefault();
    var name = $(".player1-name").val();
    newPlayer1 = new Player(name);
    $("#name1").text(newPlayer1.name);
    $("#turn-count1").text(0);
    $("#total-score1").text(0);
    $("#total-points1").text(0);
  });
  //Submission of Player Two Details & Navigating to playing board
  $(".player-two").submit(function(event){
    event.preventDefault();
    var name = $(".player2-name").val();
    newPlayer2 = new Player(name);
    $("#name2").text(newPlayer2.name);
    $("#turn-count2").text(0);
    $("#total-score2").text(0);
    $("#total-points2").text(0);
  });
  //Player One rolling the dice
    $("#roll-dice1").click(function() {
      play1();
      $("#total-score1").text(newPlayer1.score);
    });
    //Player One holding and passing
    $("#pass1").click(function(){
      newPlayer1.tally();
      $("#total-points1").text(newPlayer1.finalScore);
      pass1();
    });
