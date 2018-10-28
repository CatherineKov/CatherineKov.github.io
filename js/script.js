menu.onclick = function myFunction() {
  var menu = document.getElementById('menu');
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
  {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }

}

$(document).ready(function() {
  $("#singin").click(function( event ){
      event.preventDefault();
      $(".overlay").fadeToggle("fast");
    });

  $(".close").click(function(){
      $(".overlay").fadeToggle("fast");
  });

  $(document).keyup(function(e) {
      if(e.keyCode == 27 && $(".overlay").css("display") != "none" ) {
          event.preventDefault();
          $(".overlay").fadeToggle("fast");
      }
  });
});
