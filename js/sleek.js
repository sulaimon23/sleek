$(document.window).ready(function (){
  setTimeout( function (){
    $("#loader").slideUp(2000);
  }, 3000);
  
});

$(document.window).ready(function (){
  setTimeout( function (){
    $('body').css({
      "overflow": "auto",
    })
  }, 4900);
  
});



$(function(){
 $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
 $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
});



// carousel

var carousel = $(".carousel2"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);
$(".above").on("click", { d: "w" }, flip);
$(".below").on("click", { d: "b" }, over);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  })
}
function flip(e){

  if(e.data.d=="w"){
    currdeg = currdeg + 60;
  }

  carousel.css({
    "-webkit-transform": "rotateZ("+currdeg+"deg)",
    "-moz-transform": "rotateZ("+currdeg+"deg)",
    "-o-transform": "rotateZ("+currdeg+"deg)",
    "transform": "rotateZ("+currdeg+"deg)"
  })
}
function over(e){

  if(e.data.d=="b"){
    currdeg = currdeg + 60;
  }

  carousel.css({
    "-webkit-transform": "rotateX("+currdeg+"deg)",
    "-moz-transform": "rotateX("+currdeg+"deg)",
    "-o-transform": "rotateX("+currdeg+"deg)",
    "transform": "rotateX("+currdeg+"deg)"
  })
}