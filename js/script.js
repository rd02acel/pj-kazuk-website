$(document).ready(function(){
    $('p').hover(function(){
        $(this).css("color", "blue");
    }, function(){
        $(this).css("color", "black");
    });
});