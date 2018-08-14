function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function(){
  $("#stress-survey").submit(function(event){
    event.preventDefault();


    var stressList;
    $("input:checkbox[name=question1]:checked").each(function(){
      stressList = $(this).val();
      $("#stress-result").append(stressList + ", ");
    });
    $(".result").show();
  });
  $("#luck-survey").submit(function(event){
    event.preventDefault();


    var luckWords = [];
    $("input:checkbox[name=question2]:checked").each(function(){
      luckWords.push($(this).val());
    });
    shuffle(luckWords);
    $("#luckWord").append(luckWords[0]);

    $("#month").append(Math.floor((Math.random() * 12) + 1));
    $("#day").append(Math.floor((Math.random() * 30) + 1));

    $(".fortune").show();
  });
});
