var crystal1val = 0;
var crystal2val = 0;
var crystal3val=0;
var crystal4val = 0
var totalScore = 0;
var computerval = 0;
var wins = 0;
var losses = 0;

var updateScore = function () {
    var crystalValue = 
    totalScore = totalScore + crystalValue;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
};

var generateRanNum = function () {
    computerval = Math.floor((Math.random() * 100) + 1);
    $("#randnum").html("<h4> Random Number <p>" + computerval + "<p> </h4>");
    crystal1val = Math.floor((Math.random() * 25) + 1);
    crystal2val = Math.floor((Math.random() * 25) + 1);
    crystal3val = Math.floor((Math.random() * 25) + 1);
    crystal4val = Math.floor((Math.random() * 10) + 1);
    totalScore = 0;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    
};
var winlose = function () { if (totalScore===computerval) {
    console.log("you win!");
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    wins ++;
    $("#wins").html("<h4>Wins: " + wins + "</h4>");
    generateRanNum();
}
else if (totalScore > computerval) { 
    console.log("you lose");
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    losses ++;
    $("#losses").html("<h4>losses: " + losses + "</h4>");
    generateRanNum ();
}

}

$(document).ready(function (){
// Add value of crystal to total score when clicked


generateRanNum();
$(".crystal1").click(function() {
    totalScore = totalScore + crystal1val;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    winlose ();
});

$(".crystal2").click(function() {
    totalScore = totalScore + crystal2val;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    winlose();
});$(".crystal3").click(function() {
    totalScore = totalScore + crystal3val;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    winlose ();
});$(".crystal4").click(function() {
    totalScore = totalScore + crystal4val;
    $("#userScore").html("<h4>Total Score <P>" + totalScore +"<p></h4>");
    winlose();
});







});


