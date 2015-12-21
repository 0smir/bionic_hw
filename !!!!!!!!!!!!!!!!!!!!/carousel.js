$(document).ready(function(){

        $("#my-menu").mmenu({});
        var API = $("#my-menu").data("mmenu");

        $("#mm-burger").click(function() {
            API.open();
        });
});







