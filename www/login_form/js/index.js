

$(document).ready(function(){  
$('.message a').click(function(){
   alert("click executed");
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   alert("click executed");
});
});
