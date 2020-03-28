$(function(){
    //add and remove class btn menu
    $('#nav-main span.icon-menu').click(function(){
        $('#nav-main span.icon-menu').toggleClass('icon-close');  
    });
    // close menu movil selected any link of menu movil
    $('#menu-main li a').click(function(){
        $('#nav-main span.icon-menu').removeClass('icon-close');
        $('div#menu-main').removeClass('show');
     });
     // open y close window favorites
     $('#favoritos span.icon-left').click(function(){
        $('#favoritos span.icon-left').toggleClass('icon-down');  
    });

    var owl = $("#destacados .owl-carousel").owlCarousel({
        loop:true,
    	margin:25,
    	dots:false,
    	nav:false,
    	center:false,
    	responsive:{
    		0:{
    			items:1
    		},
    		768:{
    			items:2
    		},
    		992:{
    			items:3
    		}
    	}
    });

    $('.owl-next').on("click", function (e) {
    	e.preventDefault();
    	owl.trigger('next.owl.carousel');
    	
    });

    $('.owl-prev').on("click", function (e) {
    	e.preventDefault();
    	owl.trigger('prev.owl.carousel', [300]);
    	
    });
    
    

})