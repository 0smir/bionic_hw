$(document).ready(function(){


	$('#one').click(function(){$('#one>p').hide();});

	$('#two').click(function(){$('#test').hide();});

	$('#even').click(function(){$('#three>h2:even').hide();});

	$('#four>p').click(function(){$(this).hide();});

	$('#five>p').dblclick(function(){$(this).hide();});

	$('table').mouseenter(function(){$('tr:odd').css('background-color','#f0f0f0');
	});


	  $("figure").on({mouseenter: function(){
        $("figure").find(".social");
      	$(".social").css('display','block');
  		},
  		mouseleave: function(){
  			$(".social").css('display','none');
  		}

  	});

});
