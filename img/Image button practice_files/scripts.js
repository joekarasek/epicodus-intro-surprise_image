$(document).ready(function(){
  $("button").click(function(){
    $(this).after("<img src='img/creepy.jpg'>");
    $(this).css("display","none");
    $("img").click(function(){
      $(this).css("display","none");
      $(this).after('<button class="btn btn-default" type="button" name="button">click if you dare...</button>');
    });

  });
});
