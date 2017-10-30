	 jQuery(window).on('load', function() {
    		init();
	});
    
    function getpage(page){
	//alert('getpage startedt');
	    jQuery.ajax({
		type: "POST",
		url: page,
		dataType: 'html',
		//data: dataString,
		crossDomain: true,
		cache: false,
		//beforeSend: function(){ $("#login").html('Connecting...');},
		success: function(data){
		jQuery("#main").html(data);
		}
		});
        
    }
    
    function init(){
        //check if logged in
        var user = window.localStorage.getItem("user");
        //alert(user);
        if(user == null){
            getpage('./login_form/index.html'); 
        } else {
            getpage('./video/index.html');
	    jQuery('#head_bar').fadeIn('fast');
        }
    }
    
    function logout(){
     	window.localStorage.removeItem("user");
	    location.reload();
        
    }
	
    function loader(status) {
	if(status == "start") {
		jQuery('#loader').fadeIn('slow');
		jQuery('#main').fadeOut('slow');
	} else {
		jQuery('#loader').delay(1000).fadeOut('slow');
		jQuery('#main').delay(1000).fadeIn('slow');
	}
    }
	
    function info(text) {
	jQuery('#info').fadeIn('fast');
	jQuery('#info').html(text);
	jQuery('#info').delay(3000).fadeOut('slow');
	    
    }
    

	  	//alert("Login Page loaded");
		//jQuery('.message a').click(function(){
		function change_form(){
   			jQuery('form').animate({height: "toggle", opacity: "toggle"}, "slow");
		//});
		}
	  
	  	
    		//alert("loading between");
    		//jQuery('.login-form button').click(function(){
		function go_login(){
			
			
			 $(document).ajaxError(function(e, xhr, opt){
        alert("Error requesting " + opt.url + ": " + xhr.status + " " + xhr.statusText);
    });
			
			
	    		alert("buttooon");
			loader('start');
      			var user = jQuery('#loginuser').val();
      			var pass = jQuery('#loginpass').val();
      			var dataString = "user=" + user + "&pass=" + pass;
      			//alert("transfer started");
      			//alert(dataString);
       			jQuery.ajax({
		    		type: "POST",
		    		url: "https://s22sekunden.at/wp-content/plugins/22sek-video/record/login.php",
		    		data: dataString,
				crossDomain: true,
				cache: false,
				//beforeSend: function(){ $("#login").html('Connecting...');},
				error: function(xhr, status, error){
					alert(xhr.responseText);
					
 				},
				success: function(data){
					alert(data);
			    		if(data != 0){
						localStorage.setItem("user", data);
						loader('stop');
						location.reload();
						//alert("login successful");
		    				//$("#main").html(data);
						//info('Login erfolgreich');
			   		 } else {
						//alert("login incorrect");  
						info('Benutzername oder Passwort falsch');
						loader('stop');
			   		 }
		   		 }
	       		
		  	 });
	    loader('stop');
    	//});
	}


function videoCapture() {
   var options = {
      limit: 1,
      duration: 10
   };
   navigator.device.capture.captureVideo(onSuccess, onError, options);

   function onSuccess(mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
      }
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
}
			
		
    
 
