
$(document).ready(function(){

    //for images

    $(function()
        $('carousel').on('slide.bs.carousel', function () {
            $('.active>img').animate({ opacity: '0.4' }, 2000);});
    });


});
