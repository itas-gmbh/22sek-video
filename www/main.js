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
		jQuery('#user').html(user);
	    
        }
    }
    
    function logout(){
     	localStorage.removeItem("user");
	localStorage.removeItem("id");
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
	    		
			loader('start');
			//alert("buttooon");
      			var user = jQuery('#loginuser').val();
      			var pass = jQuery('#loginpass').val();
      			var dataString = "user=" + user + "&pass=" + pass;
			
      			//alert("transfer started");
      			//alert(dataString);
       			jQuery.ajax({
		    		type: "POST",
		    		url: "https://22sekunden.at/wp-content/plugins/22sek-video/record/login.php",
		    		data: dataString,
				crossDomain: true,
				cache: false,
				dataType: 'html',
				//beforeSend: function(){ $("#login").html('Connecting...');}
				success: function(data){
			    		if(data != 0){
						var obj = jQuery.parseJSON(data);
						localStorage.setItem("user", obj.user);
						localStorage.setItem("id", obj.id);
						loader('stop');
						//alert("login correct");
						location.reload();
						
						//alert("login successful");
		    				//$("#main").html(data);
						//info('Login erfolgreich');
			   		 } else {
						//alert("login incorrect");  
						info('Benutzername oder Passwort falsch');
						loader('stop');
						//alert("login incorrect");
			   		 }
		   		 }
	       		
		  	 });
	    loader('stop');
			
    	//});
	}






    
 
