// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create Restaraunt Table List
rest_table_list =
    [{
        table_number: 1,
        name:"Smith",
        num_people_in_party:4,
        time: "1600",
        status: "reserved"
    }]

// Create Restaurant Waiting List
rest_wait_list =
    [{
        table_number: 6,
        name: "Will",
        num_people_in_party: "5",
        time: "1600",
        status: "pending"
    }]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log([rest_table_list, rest_wait_list])
  });
