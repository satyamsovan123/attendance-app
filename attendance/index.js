// var text = document.getElementById("text");
// var shadow = "";
//
// for(var i = 0; i < 30; i++){
//   shadow += (shadow? ',':'') + -i * 1 + "px " + i * 1 + "px 0 #F9F7BE";
// }
//
// text.style.textShadow = shadow;

AOS.init();
var options = {
  strings: ['<i>First</i> sentence.', 'Remarkably'],
  typeSpeed: 40
};

var typed = new Typed('.element', {strings: [
    'attentively',
    'remarkably',
    'rightfully',
    'evidently',
    'resourcefully',
    'attendance partner',
    'soon-to-be one and only attendance app'
  ],typeSpeed: 40, smartBackspace: true, loop: true, loopCount: Infinity, showCursor: false});

  $(".yellow-span1").on("mouseover", function() {
    $(".yellow-span1").css("color", "yellow");
    setTimeout(function(){ $(".yellow-span1").css("color", "black"); }, 400);
  });

  $(".yellow-span2").on("mouseover", function() {
    $(".yellow-span2").css("color", "yellow");
    setTimeout(function(){ $(".yellow-span2").css("color", "black"); }, 400);
  });
