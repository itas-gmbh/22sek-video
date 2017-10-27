

jQuery(document).ready(function(){  
jQuery('.message a').click(function(){
   alert("click executed");
   jQuery('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   alert("click executed");
});
});
