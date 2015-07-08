/*
* utilities.js
* Requires: jquery
* utility/convenience functions for sketchpad project
* Author: Purnima Gupta
*/
var utils;
utils = (function() {
    var utilities;
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

    return {
        'isArray': isArray,
        'createButton': createButton
    };
})();
