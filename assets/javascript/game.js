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
    alert("you win!");
    wins ++;
    $("#wins").html("<h3>Wins: "+ wins + "</h3>");
    generateRanNum();
}
else if (totalScore > computerval) { 
    console.log("you lose");
    losses ++;
    $("#losses").html("<h3>Losses: " + losses+"</h3>");
    generateRanNum ();
}

}

$(document).ready(function (){
// Add value of crystal to total score when clicked


generateRanNum();
$(".crystal1").click(function() {
    totalScore = totalScore + crystal1val;
    $("#userScore").html("Total Score <P>" + totalScore +"<p>");
    winlose ();
});

$(".crystal2").click(function() {
    totalScore = totalScore + crystal2val;
    $("#userScore").html("Total Score <P>" + totalScore +"<p>");
    winlose();
});$(".crystal3").click(function() {
    totalScore = totalScore + crystal3val;
    $("#userScore").html("Total Score <P>" + totalScore +"<p>");
    winlose ();
});$(".crystal4").click(function() {
    totalScore = totalScore + crystal4val;
    $("#userScore").html("Total Score <P>" + totalScore +"<p>");
    winlose();
});







});


