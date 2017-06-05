/*function paste_img( group, end_num ) {
  for(var i = 0; i < end_num; i++) {
    $(".content").append("<img src='/img/album_photos/"+ group + (i+1) + ".jpg' class='img-" + group + "'/>");
  }
}*/

/*
$("#a-group").click(paste_img("a", 7));
$("#b-group").click(paste_img("b", 7));
$("#c-group").click(paste_img("c", 8));
$("#d-group").click(paste_img("d", 6));
*/

for (var i = 0; i < 7; i++) {
  $(".group-a").children().filter(":nth-child(" + (i+1) + ")").css("transition-delay", function(){return 0.2 * i + "s";});
}

for (var i = 0; i < 7; i++) {
  $(".group-b").children().filter(":nth-child(" + (i+1) + ")").css("transition-delay", function(){return 0.2 * i + "s";});
}

for (var i = 0; i < 8; i++) {
  $(".group-c").children().filter(":nth-child(" + (i+1) + ")").css("transition-delay", function(){return 0.2 * i + "s";});
}

for (var i = 0; i < 6; i++) {
  $(".group-d").children().filter(":nth-child(" + (i+1) + ")").css("transition-delay", function(){return 0.2 * i + "s";});
}

function paste_img(group_x) {
  if(group_x === "a") {
    $(".description").text("These are A group's pictures.");
    $(".img-a").addClass("show");
    $(".img-b").removeClass("show");
    $(".img-c").removeClass("show");
    $(".img-d").removeClass("show");
    $("#a-group").css("background-color", "yellowgreen");
    $("#b-group").css("background-color", "lightyellow");
    $("#c-group").css("background-color", "lightyellow");
    $("#d-group").css("background-color", "lightyellow");
  }
  else if(group_x === "b"){
    $(".description").text("These are B group's pictures.");
    $(".img-a").removeClass("show");
    $(".img-b").addClass("show");
    $(".img-c").removeClass("show");
    $(".img-d").removeClass("show");
    $("#a-group").css("background-color", "lightyellow");
    $("#b-group").css("background-color", "yellowgreen");
    $("#c-group").css("background-color", "lightyellow");
    $("#d-group").css("background-color", "lightyellow");
  }
  else if(group_x === "c"){
    $(".description").text("These are C group's pictures.");
    $(".img-a").removeClass("show");
    $(".img-b").removeClass("show");
    $(".img-c").addClass("show");
    $(".img-d").removeClass("show");
    $("#a-group").css("background-color", "lightyellow");
    $("#b-group").css("background-color", "lightyellow");
    $("#c-group").css("background-color", "yellowgreen");
    $("#d-group").css("background-color", "lightyellow");
  }
  else {
    $(".description").text("These are D group's pictures.");
    $(".img-a").removeClass("show");
    $(".img-b").removeClass("show");
    $(".img-c").removeClass("show");
    $(".img-d").addClass("show");
    $("#a-group").css("background-color", "lightyellow");
    $("#b-group").css("background-color", "lightyellow");
    $("#c-group").css("background-color", "lightyellow");
    $("#d-group").css("background-color", "yellowgreen");
  }

}

$("#a-group").click(function(){paste_img("a");});
$("#b-group").click(function(){paste_img("b");});
$("#c-group").click(function(){paste_img("c");});
$("#d-group").click(function(){paste_img("d");});