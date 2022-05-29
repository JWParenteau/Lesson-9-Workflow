// <!-- jQuery code to help with :hover visibility on iOS devices --> 
// <!-- Replace "YOUR SELECTOR HERE" with specific css selector -->
 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script> 
 <script type="text/javascript"> 
 $(document).ready(function () { 
 if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) { 
 $("YOUR SELECTOR HERE").click(function () { }); 
 } 
 }); 
  </script>