
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    window.setTimeout(function() {
        $("#splash").addClass("splash-animated");
    }, 500);
    
    var pages = ["sample", "overview", "gallery", "concepts", "ethics", "team", "footer"];
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
            }
        });
    });
    hljs.initHighlightingOnLoad();
    $('ul.tabs').tabs();
});
