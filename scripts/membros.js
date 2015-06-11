<script>
  
	window.fbAsyncInit = function() {
    FB.init({
      appId      : '369136536615855',
      xfbml      : true,
      version    : 'v2.3'
    });
		
		FB.api( 
			"/gmoura.dev/picture?redirect=false&width=160&height=160",
		  function (response) {
		  	if (response && !response.error) {
		    	/* handle the result */
		      console.log(response.data.url)
		    }
		 }
		);
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



</script>
