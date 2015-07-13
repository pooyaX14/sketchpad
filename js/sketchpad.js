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

    function insertDimensionFormEl(str) {
        var label = utils.createEl('label');
        var input = utils.createEl('input');
        var div2 = utils.createEl('div', 'setting_input');
        $(label).attr('for', str).text(str + ": ").addClass('span1');
        $(input).attr('name', str).attr('id', str).addClass('span3');

        $(div2).append($(label)).append($(input));
        $('aside').append($(div2));

        return input;
    }

    function clear_old_grid() {
        $(".container").html("");
    }

    function draw_grid(x_dim, y_dim) {
        clear_old_grid();
        var x = parseInt($(x_dim).val());
        var y = parseInt($(y_dim).val());
        for(var j = 0; j<y; j++) {
                var div_row = utils.createEl("div");
                $(div_row).height(100/y + "%");
            for(var i = 0; i<x;i++) {
                var div_column = utils.createEl("div");
                $(div_column).html("&nbsp;");
                $(div_column)
                    .height(100 + "%").width(100/x + "%").addClass("gridel")
                    .on("mouseenter", function() {
                        $(this).css({
                            'background-color': getRandomColor()
                        });
                    });
                $(div_row).append($(div_column));
            }
            $(".container").append($(div_row));
        }
    }

    var h4 = utils.createEl("h4");
    $(h4).text('Grid dimensions');
    // erase existing stuff
    $("aside").text("");
    // popuate new stuff
    $("aside").append( $(h4) );

    var x_input = insertDimensionFormEl('x');
    var y_input = insertDimensionFormEl('y');

    var create_btn = utils.createButton('CREATE', 'centeredLargeButton', 'aside');

     $(create_btn).click(function(){
        draw_grid(x_input, y_input);
     });

    var grid_lines = utils.createButton('Show/Hide Grid', 'centeredLargeButton', 'aside');

    $(grid_lines).click(function() {
        $(".gridel").toggleClass("grid_lines");
    });


    function getRandomColor() {
        var r, g, b;
        r = parseInt((Math.random()*255));
        g = parseInt((Math.random()*255));
        b = parseInt((Math.random()*255));
        var css = "rgb("+r+","+g+","+b+")"
        return css;
    }
 });

