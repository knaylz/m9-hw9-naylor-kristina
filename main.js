$(document).ready(function(){
	// Pop out nav plugin: http://tympanus.net/codrops/2009/11/30/beautiful-slide-out-navigation-a-css-and-jquery-tutorial/
    $(function() {

        $('#navigation a').stop().animate({'marginLeft':'-85px'},1000);
       
        $('#navigation > li').hover(
         function () {
          $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
         },
         function () {
          $('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
         }
        );
       });
});