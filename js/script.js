$(document).ready(function(){

    var hiddenElement = $('#floting-icon');
    var anchorElement0 = $('#L1');
    var anchorElement1 = $('#L2');
    var isFirst = true;

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var anchorOffset0 = anchorElement0.offset().top;
        var anchorOffset1 = anchorElement1.offset().top;
        // console.log("st:"+scrollTop)
        // console.log("Offset:"+anchorOffset1)
        if (scrollTop > anchorOffset1) {
            console.log("HIDE");
            hiddenElement.fadeOut(500);

        } else {
            hiddenElement.fadeIn(500);
        }




        if(scrollTop > anchorOffset0 && isFirst){
            isFirst=false;
            animateNumber("a0",82000,"$82,000");
            scrollto("b0",82000,100000);

            animateNumber("a1",9600,"$9,600");
            scrollto("b1",9600,100000);

            animateNumber("a2",6000,"$6,000");
            scrollto("b2",6000,10000);

            animateNumber("a3",300,"$300");
            scrollto("b3",300,10000);

        }
    });


    function scrollto(id,value,outof){
        targetWidth = (value/outof)*100;
        
        $('#'+id).animate({
            width: targetWidth + '%'
        }, 5000);
    }

    function animateNumber(id,value,ans) {
        $({numberValue: 0}).animate({numberValue: value}, {
            duration: 5000, // 5 seconds
            easing: 'easeOutQuad', // nonlinear speed curve
            step: function() {
                // console.log("#"+id)
                $('#'+id).text('$' + Math.floor(this.numberValue).toLocaleString());
            },
            complete: function() {
                $('#'+id).text(ans);
            }
        });
    }

    $('#L0-cta-register').click(function(event){
        event.preventDefault();
        window.location="https://forms.office.com/r/JwQyuBKnkj";
    });    
    $('#L0-cta-bookdemo').click(function(event){
        event.preventDefault();
        window.location="https://forms.office.com/r/JwQyuBKnkj";
    });
    $('#L5-cta-register').click(function(event){
        event.preventDefault();
        window.location="https://forms.office.com/r/JwQyuBKnkj";
    });
    $('#L5-cta-bookdemo').click(function(event){
        event.preventDefault();
        window.location="https://forms.office.com/r/JwQyuBKnkj";
    });    


    // $('#L0-cta-register').hover(
    //     function() {
    //         // On mouse enter: fade out, change src, then fade back in
    //         $(this).attr('src', 'res/0/Frame 133Inv.png');
    //         // $(this).fadeOut(10, function() {
    //         // });
    //     }, 
    //     function() {
    //         // On mouse leave: fade out, change src back, then fade back in
    //         $(this).attr('src', 'res/0/Frame 133.png');
    //         // $(this).fadeOut(10, function() {
    //         // });
    //     }
    // );


    // $('#L0-cta-bookdemo').hover(
    //     function() {
    //         // On mouse enter: fade out, change src, then fade back in
    //         $(this).attr('src', 'res/0/Frame 132Inv.png');
    //         // $(this).fadeOut(10, function() {
    //         // });
    //     }, 
    //     function() {
    //         // On mouse leave: fade out, change src back, then fade back in
    //         $(this).attr('src', 'res/0/Frame 132.png');
    //         // $(this).fadeOut(10, function() {
                
    //         // });
    //     }
    // );


    // $('#L5-cta-register').hover(
    //     function() {
    //         // On mouse enter: fade out, change src, then fade back in
    //         $(this).attr('src', 'res/5/Frame 133Inv.png');
    //         // $(this).fadeOut(10, function() {
                
    //         // });
    //     }, 
    //     function() {
    //         // On mouse leave: fade out, change src back, then fade back in
    //         $(this).attr('src', 'res/5/Frame 133.png');
    //         // $(this).fadeOut(10, function() {
               
    //         // });
    //     }
    // );


    // $('#L5-cta-bookdemo').hover(
    //     function() {
    //         // On mouse enter: fade out, change src, then fade back in
    //         $(this).attr('src', 'res/5/Frame 132Inv.png');
    //         // $(this).fadeOut(10, function() {
                
    //         // });
    //     }, 
    //     function() {
    //         // On mouse leave: fade out, change src back, then fade back in
    //         $(this).attr('src', 'res/5/Frame 132.png');
    //         // $(this).fadeOut(10, function() {
                
    //         // });
    //     }
    // );



});