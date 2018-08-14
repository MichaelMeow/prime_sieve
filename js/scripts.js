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
});
