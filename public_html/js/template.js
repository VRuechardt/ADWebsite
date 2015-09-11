
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    window.setTimeout(function() {
        $("#splash").addClass("splash-animated");
    }, 500);
    
    var pages = ["overview", "lectures", "hackathon", "solutions", "race", "team", "cdtm", "footer"];
    var pageData = [];
    $(pages).each(function(i, e) {
        var index = i;
        $.get("html/" + e + ".html", function(data) {
            
            pageData[index] = data;
            
            var done = true;
            for(var c = 0; c < pages.length; c++) {
                if(!pageData[c]) {
                    done = false;
                }
            }
            
            if(done) {
                var html = "";
                for(var i in pageData) {
                    html += pageData[i];
                }
                $("#container").html(html);
                $('.slider').slider({full_width: true});
                $('ul.tabs').tabs();
                gallery();
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 'auto',
                    spaceBetween: 30
                });
                $('.scrollspy').scrollSpy();
            }
        });
    });
    hljs.initHighlightingOnLoad();
    
    $(window).scroll(function() {
        if($(document).scrollTop() > 84) {
            $(".nav-secondary").css({position: "fixed", top: 0, left: 0, right: 0});
        } else {
            $(".nav-secondary").css({position: "initial"});
        }
    });
    
    
    
    
});
