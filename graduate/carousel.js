
$(document).ready(function(){


    $(function(){
        $('#main-proposition').on('slide.bs.carousel', function () {
            $('#main-proposition.active>img').animate({ opacity: '0.4' }, 2000);
        });
    });



    $('#clients-slide').slick({
        $('#clients-slide').slick({
            dots: true
        });
    });




});









