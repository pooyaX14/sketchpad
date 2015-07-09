$(document).ready(function() {
    for(var i = 1; i<=16; i++) {
        for(var j = 1; j<=16; j++) {
            var div = utils.createEl("div", "gridel");
            $(div).html("&nbsp;");
            //$(div).addClass("gridel");
            $(div).on("mouseleave", function() {
                $(this).addClass("painted");
            });
            $(".container").append($(div));
        }
    }


    // function create_input() {
        var div2 = document.createElement("div");
        $(div2).addClass("dimensions");
        $("aside").append($(div2));
        var newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = "x_dimension";
        $(".dimensions").html(newInput);
        // var get_value = $('#x_dimension').val();
        // return get_value;
        // console.log(get_value);
    // }

    var grid_lines = utils.createButton("Show/Hide Grid", "centeredLargeButton position", "body");
    var clear_button = utils.createButton("Set dimensions:", "centeredLargeButton", "body");

    $(grid_lines).click(function() {
        $(".gridel").toggleClass("grid_lines");
    });

    var resolution_limit = 100;

    $(clear_button).click(function() {
        $("div.gridel").removeClass("painted");

        do {
            var resolution = checkInput("Sketchpad resolution: (between 1 and " + resolution_limit + ")");
        } while (resolution > resolution_limit);
        // create_input();
        draw_grid(resolution);
    });

    $("body").append(clear_button);

    function clear_old_grid() {
        $(".container").html("");
    }

    function draw_grid(number) {
        clear_old_grid();
        for(var i = 1; i<= number*number; i++) {
            // to split rows <div>
            //for(var j =1 ; j<=number; j++)
            {
                var div = document.createElement("div");
                $(div).html("&nbsp;");

                $(div)
                    .width(100/number + "%")
                    .height(100/number + "%")
                    .addClass("gridel")
                    .on("mouseenter", function() {
                        $(this).css({
                            'background-color': getRandomColor()
                        });
                    });
                $(".container").append($(div));
            }
        }

    }

    function getRandomColor() {
        var r, g, b;
        r = parseInt((Math.random()*255));
        g = parseInt((Math.random()*255));
        b = parseInt((Math.random()*255));
        var css = "rgb("+r+","+g+","+b+")"
        return css;
    }

    function checkInput(message) {
        do {
            var d = prompt(message);
            if(d === null) {
                var number = 16;
            } else {
                var number = parseInt(d);
            }
        } while(isNaN(number))

        return number;
    }

});

