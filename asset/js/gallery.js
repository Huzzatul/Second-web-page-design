(function(){

    'use strict';


    var $gallery = $('.gallery');

    $gallery.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $gallery.isotope({filter: filter});

    });

})(jQuery);