//====================
 //  nice scroll
 //===================

 $(document).ready(function(){
  $("html").niceScroll({
  	cursorwidth:10,
  	cursorborder:0,
  	cursorcolor:'#01A7FD',
  	autohidemode:false,   	//auto hide option
  	cursorborderradius:5, 	//border radious
  	horizrailenabled:false,	//horizantal scroll diasable
  });

 });

 //====================
 //  Count down-to 
 //===================

 $(document).ready(function(){

 	$('.timer').countTo();
 });

  //====================
 //  Skill
 //===================

 $(document).ready(function(){
	 	$('.skill_content').appear(function(){  //user for animation when reach the exect div
		 		$('.skills').percentcircle({
		 		animate: true,
		 		bgColor: '#ddd',
		 		coverBg:'#fff',
		 		fillColor:'#E74E3E',
		 		Cir:{
		 			'position':'relatiive',
		 			'text-align':'center',
		 			'left':'0px'
		 		}
		 	});
	 	});
 	
 });

 //====================
 //  type
 //===================
  $(document).addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0
      });
  });
