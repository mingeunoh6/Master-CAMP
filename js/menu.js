$(document).ready(function(){

  $(document).keyup(function(e){
    if(e.keyCode === 27){
      $('.grid').toggleClass('grid-show');
  
    }
  });
});



var viewport = window.matchMedia('(max-width: 999px)');

if(viewport.matches){ 
var nav = $('.navigation');
  var btn = $('<button class="btn-menu" aria-label="메인 메뉴 열기"></button>');
  var bar_top=$('<span class="menubar menubar-top"></span>');
  var bar_middle=$('<span class="menubar menubar-middle"></span>');
  var bar_bottom=$('<span class="menubar menubar-bottom"></span>');
  var item = $('.menu > li');


btn.append(bar_top, bar_middle, bar_bottom);
nav.prepend(btn);
item.addClass('menu-item');
item.attr('tapindex','0');

btn.click(function(){
    $(this).toggleClass('btn-menu-act')
    if($(this).hasClass('btn-menu-act')){
  $(this).attr('aria-label','메인 메뉴 닫기');
    } else{
      $(this).attr('aria-label','메인 메뉴 열기');
    }
  }); 


item.on('click keyup',function(e){
if(e.type === 'click' || e.keyCode ===13 || e.keyCode === 32){

  item.removeClass('menu-item-act');
  $(this).addClass('menu-item-act');
}


});

// item.on('keyup',function(e){
//   if(e.keyCode === 13 || e.keyCode === 32){
//     item.removeClass('menu-item-act');
//     $(this).addClass('menu-item-act');
//   }
 
// });


}
// 버튼을 클릭했을때 .btn-menu에 새로운 클래스르 만든다. //

