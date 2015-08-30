
function gallery() {
    
    $(".card-image").find("img").on("mouseover", function() {
        $("#floatingImage")[0].src = this.src;
        var rect = this.getBoundingClientRect();
        console.log(rect);
        $("#floatingImage").css({
            display: "block",
            position: "fixed",
            left: rect.left + "px",
            top: rect.top + "px",
            right: rect.right + "px", 
            bottom: rect.bottom + "px",
            width: this.offsetWidth + "px",
            height: this.offsetHeight + "px",
            pointerEvents: "none",
            transform: "scale(1)",
            textIndent: 0
        });
        
        $("#floatingImage").animate({textIndent: 50}, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', "scale(" + ((now+50) / 50) + ")");
                $(this).css('margin-top', (-now) + "px");
            },
            duration: 'slow'
        }, 'linear');
        
        
        console.log({
            position: "fixed",
            left: rect.left + "px",
            top: rect.top + "px",
            right: rect.right + "px", 
            bottom: rect.bottom + "px"
        });
    });
    
    $(".card-image").find("img").on("mouseout", function() {
        
        $("#floatingImage").css({
            display: "none"
        });
        
    });
    
}