//1. Emerald City
//2. Zion
//3. Mega-City One
//4. Mos Eisley
//5. Hogsmeade
//6. Rapture
//7. Gotham City
//8. Los Angeles (Blade Runner)



//load start page

//user clicks start button

//background changes
//question is displayed
//answers are displayed
//score is displayed
//timer is displayed and starts counting down
  //IF timer reaches 0
    //display "time's up" message and go to next question

//user clicks one of four buttons

//IF choice is correct
  //display "correct answer" message
  //go to next question
//ELSE
  //display "incorrect answer" message
  //go to next question

//after last question, display score





//====[global variables]===================================//
  var counter = 0;
  var btnPressed
  var looper = 0
  var correctWrong
  var time = 10;
  var timesUp
  var timesUpTF = false;
  var loop
  var correct = 0;
  var wrong = 0;

  var questionArray = [
    //0 - Game Start
    "this is just a gameStart placeholder so my counts are correct",
    //1 - Emerald City
    ["The Green City", "The Emerald City", "The Emerald Kingdom", "Io"],
    //2 - Zion
    ["Zion", "Paradigm City", "Santuary", "The Bunker"],
    //3 - Mega-City One
    ["New New York City", "Apocalypse City", "Ragnarok", "Mega-City One"],
    //4 - Mos Eisley
    ["Mos Eisley", "Pau City", "Kashyyk", "Tipoca City"],
    //5 - Hogsmeade
    ["Gordric's Hollow", "Giagon Alley", "Hogsmeade", "Azkaban"],
    //6 - Rapture
    ["Columbia", "Rivet City", "Midgar", "Rapture"],
    //7 - Gotham
    ["Metropolis", "Gotham", "Central City", "Doomstadt"],
    //8 - Los Angeles
    ["Los Angeles", "Chicago", "New York", "Dallas"],
    //9 - correct answers
    [NaN, 1, 0, 3, 0, 2, 3, 1, 0]
  ];


  var idArray = [
    //0 - Game Start
    "this is just a gameStart placeholder so my counts are correct",
    //1 - Emerald City
    ["TheGreenCity", "TheEmeraldCity", "TheEmeraldKingdom", "Io"],
    //2 - Zion
    ["Zion", "ParadigmCity", "Santuary", "TheBunker"],
    //3 - Mega-City One
    ["NewNewYorkCity", "ApocalypseCity", "Ragnarok", "MegaCityOne"],
    //4 - Mos Eisley
    ["MosEisley", "PauCity", "Kashyyk", "TipocaCity"],
    //5 - Hogsmeade
    ["GordricsHollow", "GiagonAlley", "Hogsmeade", "Azkaban"],
    //6 - Rapture
    ["Columbia", "RivetCity", "Midgar", "Rapture"],
    //7 - Gotham
    ["Metropolis", "Gotham", "CentralCity", "Doomstadt"],
    //8 - Los Angeles
    ["LosAngeles", "Chicago", "NewYork", "Dallas"],
    //9 - correct answers
    [NaN, "TheEmeraldCity", "Zion", "MegaCityOne", "Mos Eisley", "Hogsmeade", "Rapture", "Gotham", "LosAngeles"]
  ];

var hintArray = [
  //0 - Game Start
  "You will have only a short amount of time to guess the finctional city showed to you.  Good luck!",
  //1 - Emerald City
  "This city is home to the Wizard of Oz.",
  //2 - Zion
  "This city is the last human one on earth.",
  //3 - Mega-City One
  "Designed to house 350 million citizens, the population of this city soon swelled to an astounding 800 million people.",
  //4 - Mos Eisley
  "'You will never find a more wretched hive of scum and villainy.'",
  //5 - Hogsmeade
  "This villiage is known for its specialty shops and pubs such as Zonko's Joke Shop and Honeydukes.",
  //6 - Rapture
  "The goal of this city was to create a capitalist society free of religious and government interference, where any citizen could achieve for his or her own gain, rather than for the altruistic fulfillment of the wants of others.",
  //7 - Gotham
  "This city is said to figuratively be Manhattan below Fourteenth Street at eleven minutes past midnight on the coldest night in November.",
  //8 - Los Angeles
  "The skyline of this city is dominated by the twin pyramids of the Tyrell Corporation",
  //9 - Game Over
  "Game Over"
];
var picSourceArray = [
  "assets/images/neotokyo.jpg", "assets/images/emerald_city.jpg", "assets/images/zion.jpg", "assets/images/mega_city_one.jpg", "assets/images/mos_eisley.png", "assets/images/hogsmeade.jpg", "assets/images/rapture.jpg", "assets/images/gotham_city.jpg", "assets/images/los_angeles.png", "assets/images/game_over.jpg",
  "assets/images/correct.gif", "assets/images/wrong.gif",
  "assets/images/timesUp.gif"
];
//====[global functions]===================================//
function startPage() {
  $("#questionPage").hide();
  $("footer").hide();
  $(".backgroundPic").css("background-image", "url(" + picSourceArray[counter] + ")");
  $(".hint").text(hintArray[counter]);
}

function setQuestion() {
  console.log("setQuestion activated");
  counter++;
  if (counter >= 9) {
    if (btnPressed == questionArray[9][counter]) {
      console.log("correct!");
      correct++;
      correctWrong = $("<div>");
      $(correctWrong).attr("id","correctWrong");
      var gif = $("<img src=" + picSourceArray[10] + ">");
      $(correctWrong).append(gif);
      $(".hint").append(correctWrong);

    } else {
      console.log("wrong!");
      wrong++;
      correctWrong = $("<div>");
      $(correctWrong).attr("id","correctWrong");
      var gif = $("<img src=" + picSourceArray[11] + ">");
      $(correctWrong).append(gif);
      $(".hint").append(correctWrong);
    }
    gameEnd();

  } else {
    console.log("counter is: " + counter);
    $("#questionPage").show();
    $("footer").show();
    $("#startPage").hide();
    $(".backgroundPic").css("background-image", "url(" + picSourceArray[counter] + ")");
    $(".hint").text(hintArray[counter]);
    for (var i = 0; i < 4; i++) {
      $("#"+i).text(questionArray[counter][i]);
    }
    time = 10;
    countDown();
  }
}

function removeGif() {
  console.log("removeGif activated");
  if (timesUpTF == true) {
    $(timesUp).remove();
    timesUpTF = false;
    setQuestion();
  } else {
    $(correctWrong).remove();
    setQuestion();
  }
}


function verifyGuess() {
  console.log("verifyGuess activated");
  clearInterval(loop);
  if (btnPressed == questionArray[9][counter]) {
    console.log("correct!");
    correct++;
    correctWrong = $("<div>");
    $(correctWrong).attr("id","correctWrong");
    var gif = $("<img src=" + picSourceArray[10] + ">");
    $(correctWrong).append(gif);
    $(".hint").append(correctWrong);
    setTimeout(removeGif, 10000);

  } else {
    console.log("wrong!");
    wrong++;
    correctWrong = $("<div>");
    $(correctWrong).attr("id","correctWrong");
    var gif = $("<img src=" + picSourceArray[11] + ">");
    $(correctWrong).append(gif);
    $(".hint").append(correctWrong);
    setTimeout(removeGif, 10000);
  }
}

function countDown() {
  $("#count10").attr("class", "active");
  for (var i = 1; i < 10; i++) {
    $("#count" + i).removeClass();
  }
  loop = setInterval(function(){
    if (time > 0) {
      time--;
      $("#count" + (time + 1)).removeClass();
      $("#count" + time).addClass("active");
    } else {
      console.log("Time's Up!");
      timesUpTF = true;
      timesUp= $("<div>");
      $(timesUp).attr("id","timesUp");
      var gif = $("<img src=" + picSourceArray[12] + ">");
      $(timesUp).append(gif);
      $(".hint").append(timesUp);
      setTimeout(removeGif, 6000);
      clearInterval(loop);
    }
  }, 1000);
}

function gameEnd() {
  if (timesUpTF == true) {
    $(timesUp).remove();
  } else {
    $(correctWrong).remove();
  }
  $("#questionPage").show();
  $("#nav-mobile").hide();
  $("footer").show();
  $("#startPage").hide();
  $(".hint").hide();
  $(".backgroundPic").css("background-image", "url(" + picSourceArray[counter] + ")");
  $("#statusMessage").text(hintArray[counter]);
  $("#buttonWrapper").empty();
  var correctCount = $("<div class='col s6' id='correctCount'></div>").append("<a class='btn btn-floating btn-large green pulse'>" + correct + "</a>");
  var wrongCount = $("<div class='col s6' id='wrongCount'></div>").append("<a class='btn btn-floating btn-large red pulse'>" + wrong + "</a>");
  $("#buttonWrapper").append(correctCount);
  $("#buttonWrapper").append(wrongCount);
}







//====[game logic]=========================================//
$(document).ready(function(){

  startPage();


  $("#startBtn").on("click", function(){
    setQuestion();
  });

  $(".answerBtn").on("click", function(){
    if (counter > 0) {
      console.log("one of four buttons was pushed!");
      btnPressed = $(this).attr("id");
      console.log("button #"+ btnPressed);
      verifyGuess();
    } else if (counter >=9) {
      return
    }
  });


});
