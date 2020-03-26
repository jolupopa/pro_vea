$(function(){
    $('#nav-main span.icon-menu').click(function(){
        $('#nav-main span.icon-menu').toggleClass('icon-close');  
    });

    $('#menu-main li a').click(function(){
        $('#nav-main span.icon-menu').removeClass('icon-close');
        $('div#menu-main').removeClass('show');
     });
    
    

})