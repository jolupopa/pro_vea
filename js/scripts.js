$(function(){

	//-------------------------------->
    //modifica botones responsive
    //-------------------------------->
		$(window).resize(function() {
			if(window.innerWidth >= 768){
				$('#suscripcion .btn, #articulos .btn, #contactar .btn').removeClass('btn-block');
			}
			if(window.innerWidth < 768){
				$('#suscripcion .btn, #articulos .btn, #contactar .btn').addClass('btn-block');
			}	
		});


		

    //--------Index---------------------------->
	//cambio de icono y cierre de menu movil
	//------------------------------------>
    //add and remove class btn menu
    $('#nav-main span.icon-menu').click(function(){
        $('#nav-main span.icon-menu').toggleClass('icon-close');  
    });
    // close menu movil selected any link of menu movil
    $('#menu-main li a').click(function(){
		$('#nav-main span.icon-menu').removeClass('icon-close');
		$("#nav-main button").attr("aria-expanded", false);
        $('div#menu-main').removeClass('show');
	 });


	 //++++++++++++++++++++++++++++++++++
	// icon-menu-user 
	//++++++++++++++++++++++++++++++++++

	// close menu-user  
	  //add and remove class btn menu
	$('#menu-user span.icon-menu-user').click(function(){
		$('#menu-user span.icon-menu-user').toggleClass('icon-close-user');  
		});
    // close menu movil selected any link of menu movil
    $('#menu-user li a').click(function(){	
		$('#menu-user span.icon-menu-user').removeClass('icon-close-user');
		$("#menu-user button").attr("aria-expanded", false);
		console.log("quita clse icon-close-user");
        $('#menu-user div.navbar-collapse').removeClass('show');
	 });


	 //+++++++Login++++++++++++++++++++++++++
	 //change icon-see-password of login form
      // true defaul icon-eye-slash
      var setOpcion = true; 
	  $('#logueo span.see').click(function(){
      if( setOpcion == true ){
        $('#logueo span.see').addClass('icon-eye');
        $('#logueo span.see').removeClass('icon-eye-slash');
        setOpcion = false;
        console.log('opcion 1');
      }
      else if( setOpcion  == false){
        $('#logueo span.see').addClass('icon-eye-slash')
        $('#logueo span.see').removeClass('icon-eye');
        setOpcion = true;
        console.log('opcion 2');
      }
    });

     //------------------------->
     // menu principal de buscar
     //------------------------->

     	// Init
	if ($(".form-search").length){
		searchTypeButtons();
		$(window).on('load resize', function() { searchTypeButtons(); });
	}




	/*----------------------------------------------------*/
	/*  Search Type Buttons
	/*----------------------------------------------------*/
	function searchTypeButtons() {

		// Radio attr reset
		$('.type-searchs label.active input[type="radio"]').prop('checked',true);

		// Positioning indicator arrow
		var buttonAncho = $('.type-searchs label.active').width();
		var figureLen = $('.type-searchs label.active').position().left;
		$('.search-figure').css('left', figureLen + (buttonAncho/2) );

		$('.type-searchs label').on('change', function() {
			$('.type-searchs input[type="radio"]').parent('label').removeClass('active');
			$('.type-searchs input[type="radio"]:checked').parent('label').addClass('active');

			// Positioning indicator arrow
			var buttonAncho = $('.type-searchs label.active').width();
			var figureLen = $('.type-searchs label.active').position().left;

			$('.search-figure').css({
				'left': figureLen + (buttonAncho/2),
				'transition':'left 0.4s cubic-bezier(.87,-.41,.19,1.44)'
			});
		});

	}

	


	/*----------------------------------------------------*/
	/* Advanced Search Button
	/*----------------------------------------------------*/
	$('#map-container .adv-search-btn').on('click', function(e){

		if ( $(this).is(".active") ) {

			$(this).removeClass("active");
			$(".main-search-container").removeClass("active");
			setTimeout( function() {
				$("#map-container.homepage-map").removeClass("overflow")
			}, 0);

		} else {

			$(this).addClass("active");
			$(".main-search-container").addClass("active");
			setTimeout( function() {
				$("#map-container.homepage-map").addClass("overflow")
			}, 400);

		}

		e.preventDefault();
	});


	/*----------------------------------------------------*/
    /*  Searh Form More Options
    /*----------------------------------------------------*/
    $('.more-less-trigger').on('click', function(e){
    	e.preventDefault();
    	$('.more-options, .more-less-trigger').toggleClass('active');
    	$('.more-options.relative').animate({height: 'toggle', opacity: 'toggle'}, 300);
    });

     //----------------------------->
     //menu favoritos
     // open y close window favorites
     //------------------------------>
     $('#favoritos span.icon-left').click(function(){
        $('#favoritos span.icon-left').toggleClass('icon-down');  
	});
	
    //-------------->
    // carousel
    //-------------->
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
	
    //++++++++++++++++++++++++++++++++++
	//fijar el menu principal -  superior
	$("#nav-main").stickit({
		zindex:200
	});
	//+++++++++++++++++++++++++++++++++

	/*----------------------------------------------------*/
	/*  sidebar buscar
	/*----------------------------------------------------*/
    $('.btn-buscar').on('click', function(){
		$('.contenedor-buscar').toggleClass('active');
		$('.contenedor-comparar').toggleClass('d-none');
	});

	$('#sidebar-buscar .close-sidebar').on('click', function(){
		$('.contenedor-buscar').removeClass('active');
		$('.contenedor-comparar').removeClass('d-none');
	});

	/*----------------------------------------------------*/
	/*  sidebar comparar
	/*----------------------------------------------------*/
    $('.btn-comparar').on('click', function(){
		$('.contenedor-comparar').toggleClass('active');
		$('.contenedor-buscar').toggleClass('d-none');
	});

    $('#sidebar-comparar .close-sidebar').on('click', function(){
		$('.contenedor-comparar').removeClass('active');
		$('.contenedor-buscar').removeClass('d-none');
	});

	$('#sidebar-comparar .close-comparar').on('click', function(){
		$('.contenedor-comparar').removeClass('active');
		$('.contenedor-buscar').removeClass('d-none');
	});

	

  

	

	





})