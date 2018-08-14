
var vowels = "aeiou"






$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var countTo = Math.abs(parseInt($("form #count-to").val()));
    var countBy = Math.abs(parseInt($("form #count-by").val()));

    if(countTo === "NaN" || countBy === "NaN" || countBy > countTo){
      alert("Please enter a number!")

    } else {
      for(i=countBy; i <= countTo; i += countBy){
        console.log(i);
      };
    };
  });

  $("#messageForm").submit(function(event){
    event.preventDefault();

    var messageArray = $("form #message").val().split("");



    var scrambled = messageArray.map(function(letter){

      if (vowels.includes(letter)){
        return "-"
        console.log("includes");
      } else {
        return letter
    }
    });
    console.log(scrambled.join(""));
    console.log(messageArray);
  });
});
