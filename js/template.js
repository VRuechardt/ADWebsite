
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
                var swiperLectures = new Swiper('.swiper-container-lectures', {
                    pagination: '.swiper-pagination-lectures',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next-lectures',
                    prevButton: '.swiper-button-prev-lectures',
                    slidesPerView: 'auto',
                    spaceBetween: 30
                });
                console.log(swiperLectures);
                var swiperHackathon = new Swiper('.swiper-container-hackathon', {
                    pagination: '.swiper-pagination-hackathon',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next-hackathon',
                    prevButton: '.swiper-button-prev-hackathon',
                    slidesPerView: 'auto',
                    spaceBetween: 30
                });
                var swiperRace = new Swiper('.swiper-container-race', {
                    pagination: '.swiper-pagination-race',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next-race',
                    prevButton: '.swiper-button-prev-race',
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

//mute and play youtube video

var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.mute();
    player.playVideo();
}