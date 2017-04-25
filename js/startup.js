$(document).ready(function () {
    
    var colors = {"pink" : '#f16b6f',
                 "gray" : '#c5c6b6',
                 "green" : '#aacd6e',
                 "black" : '#3c3530'};
    
    var position = 0;

    $(".step").each(function () {
        $(this).attr("data-x", String(position));
        position += 1000;
    });
    
    var width = window.outerWidth;
    var height = window.outerHeight;
    console.log("width:", width, "height: ", height);
    $(".step").css("width", width).css("height", height).css("padding", "0 100");
    
    $(document).on('impress:stepactivate', function (event) {
        var body = $(document.body);
        var target = $(event.target);
        
        body.removeClass('green-bg pink-bg');
        if (target.hasClass('exercises')) {
            body.css("background-color", colors["green"]);
            
            
        }
        else {
            body.css("background-color", colors["pink"]);
        }
        
        if (target.attr('id') == 'sprinkles') {
            console.log("sprinkles!");
            target.css('background-image', 'url(pics/sprinkles.jpg)');
            target.addClass('image');
        }            
    });
    
    impress().init();
});