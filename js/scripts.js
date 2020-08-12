    /*-----------------------------------------------------------------
      Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('hamburger--active');
        $('html').toggleClass('is-scroll-disabled');
	    $('.menu').toggleClass('menu-show');
        $('.ef-background').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function(){
            $(this).removeClass('animated');
        });
    });

    // Hovered link
    $('.menu-list__item').on('mouseenter', function(){
        $('.menu-list').addClass('has-hovered-link');
    });
    $('.menu-list__item').on('mouseleave', function(){
        $('.menu-list').removeClass('has-hovered-link');
    });