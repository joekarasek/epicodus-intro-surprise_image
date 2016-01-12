$(document).ready(function(){
  $("button").click(function(){
    $(this).after("<img src='img/creepy.jpg'>");
    $(this).css("display","none");

  });
});
