var numCharacters = 42;

///Project M
/*Used for creating the Pickers*/
var defaultCharacters = [37, 19, 18, 25, 0, 39, 5, 4, 1, 38, 7, 6, 10, 40, 31, 15, 36, 9, 22, 16, 26, 13, 34, 12, 2, 30, 35, 17, 23, 27, 14, 21, 3, 11, 20, 29, 24, 28, 8, 32, 33, 41];
/*Used when generating the codes*/
var characterHex = ["0C", "0A", "2A", "1F", "1A", "01", "13", "07", "12", "14", "10", "21", "2C", "23", "06", "02", "20", "19", "09", "00", "11", "16", "2E", "0B", "18", "0D", "08", "17", "22", "2D", "03", "0F", "26", "27", "2B", "04", "24", "15", "25", "05", "0E", "29"];
/*Contains The names of characters */
var characterNames = ["Bowser", "Captain Falcon", "Charizard", "Dedede", "Diddy Kong", "Donkey Kong", "Falco", "Fox", "Game & Watch", "Ganondwarf", "Ice Climbers", "Ike", "Ivysaur", "Jiggly Puff", "Kirby", "Link", "Lucario", "Lucas", "Luigi", "Mario", "Marth", "Meta Knight", "Mewtwo", "Ness", "Olimar", "Peach", "Pikachu", "Pit", "Rob", "Roy", "Samus", "Sheik", "Snake", "Sonic", "Squirtle", "S Zero Suit", "Toon Link", "Wario", "Wolf", "Yoshi", "Zelda", "Random"];

///Project M & Knuckles
/*Used for creating the pickers (with Knuckles)*/
var defaultCharacters2 = [38, 20, 19, 26, 0, 40, 5, 4, 1, 39, 7, 6, 10, 41, 32, 16, 37, 9, 23, 17, 27, 13, 35, 12, 2, 31, 36, 18, 24, 28, 14, 22, 3, 11, 21, 30, 25, 29, 8, 33, 34, 15, 42];
/*Used when generating the codes (with Knuckles )*/
var characterHex2 = ["0C", "0A", "2A", "1F", "1A", "01", "13", "07", "12", "14", "10", "21", "2C", "23", "06", "30", "02", "20", "19", "09", "00", "11", "16", "2E", "0B", "18", "0D", "08", "17", "22", "2D", "03", "0F", "26", "27", "2B", "04", "24", "15", "25", "05", "0E", "29"];
/*Contains The names of characters (with Knuckles)*/
var characterNames2 = ["Bowser", "Captain Falcon", "Charizard", "Dedede", "Diddy Kong", "Donkey Kong", "Falco", "Fox", "Game & Watch", "Ganondwarf", "Ice Climbers", "Ike", "Ivysaur", "Jiggly Puff", "Kirby", "Knuckles", "Link", "Lucario", "Lucas", "Luigi", "Mario", "Marth", "Meta Knight", "Mewtwo", "Ness", "Olimar", "Peach", "Pikachu", "Pit", "Rob", "Roy", "Samus", "Sheik", "Snake", "Sonic", "Squirtle", "S Zero Suit", "Toon Link", "Wario", "Wolf", "Yoshi", "Zelda", "Random"];

$(document).ready(function start() {

    populatePickers();
    populateIcons();

    //Auto Refresh Icons
    $("#sidebar").change(function() {
        //Auto update the CSS Preview
        populateIcons();

        //Auto Updata Codes upon changing the characters
        codeOutput();
    });
    //Generate Codes Button
    $("#generate_codes").click(function(e) {
        e.preventDefault();

        //Generate code when clicking "Generate Codes"
        codeOutput();
        $("#demCodes").slideToggle("medium");
    })
    //Knuckles Toggle Button
    $("#Knuckles").click(function(e) {
        //Change button to "+ Knuckles"
        if (numCharacters == 43) {
            numCharacters = 42;
            $("#Knuckles").html("+ Knuckles");
        }//Change button to "- Knuckles"
        else {
            numCharacters = 43;
            $("#Knuckles").html("- Knuckles");
        }
        //Update Pickers & Icons when adding/removing Knuckles
        populatePickers();
        populateIcons();

        //Update codes
        codeOutput();
    })

    //Used for Creating and Changing the CSS preview
    function populateIcons() {
        var names = "";
        var iconDecider = "";
        for (i = 1; i < (numCharacters + 1); i++) {

            //Center the bottom row (First Half)
            if ((i - 1) == 36 && numCharacters === 42) {
                ///Project M
                style = "style='margin-left: 118.5px;'"
                names += "<row-4 " + style + ">";
            } else if ((i - 1) == 36 && numCharacters === 43) {
                ///Project M & Knuckles
                style = "style='margin-left: 79px;'"
                names += "<row-4 " + style + ">";
            }

            //Update/Add the icons
            if (numCharacters == 43) {
                ///Project M & Knuckles
                iconDecider = "<image class='char-box-images' src='assets/images/CSS/" + characterNames2[$(".character-picker[name='" + (i - 1) + "']").val()] + ".png' width='75px' height='64px'/>";
            } else {
                ///Project M
                iconDecider = "<image class='char-box-images' src='assets/images/CSS/" + characterNames[$(".character-picker[name='" + (i - 1) + "']").val()] + ".png' width='75' height='64'/>";
            }
            //Add Character Preview Slots
            names += "<slot class='char-boxes' name='" + (i - 1) + "'>" + iconDecider + "</slot>";

            //Add row break (Start new row)
            if ((i % 9) == 0) {
                names += "</br>";
            }
            //Used for centering the bottom row (Second Half)
            if ((i - 1) == 42 && numCharacters === 42) {
                names += "</row-4>"
            }

            $("#char-previews").html(names);
        }
    }

    //Used for creating and changing the character pickers
    function populatePickers() {
        var pickers = "";
        var x;

        for (i = 0; i < numCharacters; i++) {
            pickers += "</br></br>Slot " + i + ": <select style='width:170px;' name='" + i + "' class='character-picker'>";
            if (numCharacters == 43) {
                ///Project M & Knuckles
                for (charName = 0; charName < $(characterNames2).length; charName++) {
                    pickers += "<option value='" + charName + "'";
                    x = defaultCharacters2[i];
                    if (charName == x) {
                        pickers += "selected"
                    }
                    //Add characters options to Pickers
                    pickers += ">" + characterNames2[charName] + "</option>";

                }
            } else {
                ///Project M
                for (charName = 0; charName < $(characterNames).length; charName++) {
                    pickers += "<option value='" + charName + "'";
                    x = defaultCharacters[i];
                    if (charName == x) {
                        pickers += "selected"
                    }
                    //Add characters options to Pickers
                    pickers += ">" + characterNames[charName] + "</option>";

                }
            }
            pickers += "</select>";

        }
        $("#sidebarPicker").html(pickers);
    }

    //Used for generating the ASM codes
    function generateCodes() {
        var hexIndex = "";
        var charIdOrder = "";
        var charIdOrderRNDM = "";
        var charCodes = "";

        //Beginning of the CSS code
        charCodes += "</br>* 06680DE0 000000";
        /*The amount of CSS slots will be added to the end of this line*/
        if (numCharacters == 43) {
            ///Project M & Knuckles
            charCodes += "2B";
            /*2B is the Hexidecimal Number for 43*/
        } else {
            ///Project M
            charCodes += "2A";
            /*2A is the Hexidecimal Number for 42*/
        }
        charCodes += "</br>* "
        for (char = 1; char <= numCharacters; char++) {

            //Get all the Character IDs
            if (numCharacters == 43) {
                ///Project M & Knuckles
                charIdOrder += characterHex2[$(".character-picker[name='" + (char - 1) + "']").val()];
                if (characterHex2[$(".character-picker[name='" + (char - 1) + "']").val()] != "29") {
                    charIdOrderRNDM += characterHex2[$(".character-picker[name='" + (char - 1) + "']").val()];
                } else {
                    //Remove Random from "CSS Random Data" (Prevents Random from choosing random)
                    charIdOrderRNDM += "00";
                }
            } else {
                ///Project M
                charIdOrder += characterHex[$(".character-picker[name='" + (char - 1) + "']").val()];
                if (characterHex[$(".character-picker[name='" + (char - 1) + "']").val()] != "29") {
                    charIdOrderRNDM += characterHex[$(".character-picker[name='" + (char - 1) + "']").val()];
                } else {
                    //Remove Random from "CSS Random Data" (Prevents Random from choosing random)
                    charIdOrderRNDM += "00";
                }
            }
            //Add line break
            if (((char % 8) == 0)) {
                charIdOrder += "</br>* ";
                charIdOrderRNDM += "</br>* ";
            }//Add spaces to the ASM code
            else if (((char % 4) == 0) && ((char % 8) !== 0)) {
                charIdOrder += " ";
                charIdOrderRNDM += " ";
            }
        }

        //Add Zeros
        if (numCharacters % 8 != 0) {
            var addZeros = (8 - (numCharacters % 8)) * 2;
            for (zeros = addZeros; zeros > 0; zeros--) {
                if (zeros == 8 && addZeros != 8) {
                    charIdOrder += " ";
                    charIdOrderRNDM += " ";
                }
                charIdOrder += "0";
                charIdOrderRNDM += "0";
            }
        }

        //Add "CSS Roster Data" to #demCodes
        hexIndex += charIdOrder;
        charCodes += hexIndex;

        //Add "CSS Random Data" to #demCodes
        charCodes += "</br></br>[CSS Organizer] CSS Random Data [ds22, dantarion]</br>* 046857F0 3AE00029</br>* 06680E80 00000029</br>* ";
        charCodes += charIdOrderRNDM;

        charIdOrder = "";

        return (charCodes);

    }

    //Used to add codes to demcodes
    function codeOutput() {
        var demcodes = "</br>[CSS Organizer Codes Start Here]</br></br>"

        demcodes += "[CSS Organizer] CSS Roster Data v2 [spunit262]";
        demcodes += generateCodes();

        $("#demCodes").html(demcodes);
    }
});
