$(document).ready(function() {
    for(var i = 1; i<=16; i++){
        for(var j = 1; j<=16; j++){
            var div = document.createElement("div");
            $(div).html("&nbsp;");
            $(div).addClass("gridel");
            $(div).on("mouseleave", function() {
                $(this).addClass("painted");
            });
            $(".container").append($(div));
        }
    }
});

