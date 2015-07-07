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

    var clear_button = document.createElement("button");
    $(clear_button).text("Clear");
    $(clear_button).click(function() {
        $("div.gridel").removeClass("painted");
        var num_boxes = prompt("Enter the number between 1 to 50");
        num_boxes = parseInt(num_boxes);
        draw_grid(num_boxes);
    });
    $(clear_button).addClass("centeredLargeButton");
    $("body").append(clear_button);

    function clear_old_grid() {
        $(".container").html("");
    }

    // var ask_user = prompt("Enter the number between 1 to 16");
    function draw_grid(number) {
        clear_old_grid();
        for(var i = 1; i<= number; i++) {
            for(var j =1 ; j<=number; j++) {
                var div = document.createElement("div");
                $(div).html("&nbsp;");

                $(div)
                    .width(100/number + "%")
                    .height(100/number + "%")
                    .addClass("gridel")
                    .on("mouseenter", function() {
                        $(this).addClass("painted");
                    });

                $(".container").append($(div));
            }
        }
    }
});

