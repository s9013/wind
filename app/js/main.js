require.config({

	baseUrl:'.',

	paths:{
		'jquery': 'vender/jquery/jquery',
		'bootstrap': 'vender/bootstrap/bootstrap',
		'angular' : 'vender/angularjs/angular',
		'route':'vender/angular-route/angular-route',
		'resource':'vender/angular-resource',
		'domReady':'vender/domReady',
		'echarts':'vender/echarts/echarts-plain',
		'nicescroll':'vender/nicescroll/jquery.nicescroll'
	},

	shim:{
		'bootstrap':{
			deps:['jquery']
		},
		"route":{
      		deps:['angular']  		
  		},
  		"resource":{
      		deps:['angular']  		
  		}
	}

});

require(['domReady','angular','js/app','jquery','bootstrap','nicescroll'],function (domReady) {

	// start angular
	domReady(function(){
		angular.bootstrap(document,['App']);

		// scroll
		$("html").niceScroll({cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:false,touchbehavior:false});
		// fix navbar
	 	$('.collapse li').on('click',function(){
	 		$(this).parents('ul').find('li').removeClass('active');
	 		$(this).addClass('active');
            $('[data-toggle=collapse]:visible').click();   
         });


	 	 // show hide back
     $(window).scroll(function(){  
         if(window.scrollY > 0){
             $('#back').fadeIn(100);
         }else{
             $('#back').fadeOut(500); 
         } 
     });
     
     // back
     $('#back').on('click',function(){
         //console.log(window.scrollTop );
         //$('body').attr('scrollTop','0');
         $('body,html').animate({scrollTop:0},500);
         //$('#back').fadeOut(10);
     });
     
	})

	

})