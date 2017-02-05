// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');

// // ===============================================================================
// // ROUTING
// // ===============================================================================


module.exports = function (app) {




    // HTML GET Requests
    // Below code handles when users "visit" a page. 
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/:asdf?", function(req, res) {

        var chosen = req.params.asdf;

        if (chosen === "survey") {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        } else if (chosen === "home") {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        } else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }

    });


};



// exports.test = function(){

// 	console.log("this works")
// }