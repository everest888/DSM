$(document).ready(function(){

    // sub-menu animation
    var subMenuState = false;

    $('.sub-menu-button').click(function(){
        if (subMenuState == false) {
            $('.button-decor').css({'background-color':'#ffffff'});
            subMenuState = true;
            $('.sub-menu').slideToggle(300);
        }
        else {
            $('.sub-menu').slideToggle(300, function(){
                $('.button-decor').css({'background-color':'#061e37'});
                subMenuState = false;
            });
        }  
    });

    
    // services animation 
    $('.services-item').click(function(){

        $(this).find('.services-item-content').slideToggle(300);
        var arrow = $(this).find('.services-item-header>i').text();

        if (arrow == 'arrow_drop_down') {
            $(this).find('.services-item-header>i').text('arrow_drop_up');
        }
        else {
            $(this).find('.services-item-header>i').text('arrow_drop_down');
        }
        
    });

     $('.single-item').slick({
         vertical: true,
         verticalSwiping: true,
         slidesToShow: 2,
         autoplay: true,
         autoplaySpeed:3000,
        
         responsive: [
             {
                 breakpoint:768,
                 settings:{slidesToShow:1}
             }
         ]
     });
     //анимация сотрудников
     $('.active-team-img').animate({opacity:'1'},300);
     $('.our-team-all>div').click(function(){
         $('.our-team-all>div').attr('class','non-active-team-img');
         $('.non-active-team-img').animate({opacity:'0.2'},300);
         $(this).attr('class','active-team-img');
         $(this).animate({opacity:'1'},300);
         $('[id*="-agent-text"]').css({'opacity':'0'});
        activeAgentId = $('.active-team-img').attr('id');
        $('#'+activeAgentId+'-agent-text').animate({'opacity':'1'},300);
        });

        $('[id*="-agent-text"]').css({'opacity':'0'});
         var activeAgentId = $('.active-team-img').attr('id');
     
        $('#'+activeAgentId+'-agent-text').css({'opacity':'1'});

        var agentsTextWrapHeight = $('#'+activeAgentId+'-agent-text').css('height');
        $('.agents-text-wrap').css({'height':agentsTextWrapHeight});
        console.log(agentsTextWrapHeight);

        $(window).resize(function(){
            var agentsTextWrapHeight = $('#'+activeAgentId+'-agent-text').css('height');
            $('.agents-text-wrap').css({'height':agentsTextWrapHeight});
            console.log(agentsTextWrapHeight);
        });
    

});