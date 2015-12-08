$(document).ready(function(){

	$('#one').click(function(){
		$('#one').animate({
			'height':'100px',
			'width':'100px'
		});
	});
   

   $('button').click(function(){
   	$('#two').animate({
   		'margin-left':'300px'
   	});
   });

   $('#three').click(function(){
   	$(this).animate({
   		'left' : '200px',
		'top' : '200px'
   	});
   });

   $('#four').click(function(){
   	$(this).animate({'left':'250px'}, 3000);
   	$(this).animate({'left':'0'});
   });

   $('#five').click(function(){
	   	$('#five').animate({'left':'95%'}, 3000, 'swing');
	   	$('#five').animate({'top':'200px'});
	   	$('#five').animate({'left':'0'}, 3000, 'swing');
	   	$(this).animate({'top':'0'}, 3000, 'swing');
   });

   $('#six').click(function(){
	$('#six').animate({'left':'1200px', 'bottom':'500px'}, 3000, 'swing');
   });

  $('#six').click(function(){
	$('#seven').animate({'left':'1200px', 'bottom':'500px'}, 3000, 'swing');
   });



  	$('#eight').click(function (){
  		$(this).animate({'height':'80px', 'width':'80px'}, 200, function (){
  			$(this).animate({'height':'120px', 'width':'120px'}, 300, function (){
          $(this).click()} );
  		}); 
  	});
  		
});



