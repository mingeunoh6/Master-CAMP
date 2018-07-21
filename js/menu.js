$(document).ready(function(){

  $(document).keyup(function(e){
    if(e.keyCode === 27){
      $('.grid').toggleClass('grid-show');
  
    }
  });
});

// 버튼을 클릭했을때 .btn-menu에 새로운 클래스르 만든다. //

var btn = $('.btn-menu');
btn.click(function(){
  $(this).toggleClass('btn-menu-act')
}); 