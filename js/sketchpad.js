$(document).ready(function() {
    for(var i = 1; i<=16; i++) {
        for(var j = 1; j<=16; j++) {
            var div = document.createElement("div");
            $(div).html("&nbsp;");
            $(div).addClass("gridel");
            $(div).on("mouseleave", function() {
                $(this).addClass("painted");
            });
            $(".container").append($(div));
        }
    }

    /*
    * isArray(that_thing):
    *
    * checks whether given JS variable is an array
    *
    * @that_thing: arbitrary variable/object to check
    *
    * returns: Boolean (true|false)
    */
    function isArray(that_thing) {
        if(Object.prototype.toString.call( that_thing ) === "[object Array]") {
            return true;
        } else {
            return false;
        }
    }

    /*
    * createButton(caption, classname, parent):
    *
    * creates a button object, populates its text caption;
    * assigns it a css class if given, and...
    *
    * @caption (String): the text in the button (required);
    * @parent (String): css selector or JS reference of the intended parent element;
    * @classname (String, or Array of strings): the css class to assign (optional);
    *
    * returns: reference to the newly created button object (not jquery object)
    *
    */
    function createButton(caption, classname, parent) {
        var button = document.createElement("button");

        if( typeof caption !== "string") {
            console.error("Could not create button object; invalid caption supplied.");
            // add a default caption anyway
            $(button).text("NO TEXT SUPPLIED!");
        } else {
            $(button).text(caption);
        }

        // if no parent supplied, append new button to body
        // these checks are not sufficient but will work for now
        if( typeof parent === "undefined" || parent === null) {
            console.info("createButton() -> Info: no parent supplied. " +
                    "New button will be appended to BODY by default");
            parent = "body";
        }

        // to catch another possible genuine mistakes
        if (typeof parent == "number" || parent ===  "") {
            console.error("createButton() -> Error: invalid parent supplied. '" +
                    parent +
                    "' is not valid html element to append to. " +
                    "New button will be appended to BODY");
            parent = "body";
        }

        if(!isArray(classname)) {
            if(typeof classname === "string") {
                // it could be either "foo bar baz"
                // or "foo"
                document.new_array = classname.split(" ");
                classname = document.new_array;
                delete document.new_array;
            } else {
                // print error
                console.error("createButton() -> Error: classname should be " +
                        "either a String or an Array of strings");
            }

            // apply the classes
            for(var index in classname) {
                $(button).addClass(classname[index]);
            }
        }

        $(parent).append( $(button) );

        return button;
    }


    var grid_lines = createButton("Show grid", "centeredLargeButton position", "body");

    $(grid_lines).click(function() {
        $(".gridel").toggleClass("grid_lines");
    });

    var clear_button = document.createElement("button");
    var resolution_limit = 100;

    $(clear_button).text("advance grid");
    $(clear_button).addClass("centeredLargeButton");

    $(clear_button).click(function() {
        $("div.gridel").removeClass("painted");
        $(".gridel").toggleClass("grid_lines");

        do {
            var resolution = checkInput("Sketchpad resolution: (between 1 and " + resolution_limit + ")");
        } while (resolution > resolution_limit);

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

