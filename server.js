// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create Restaraunt Table List
rest_table_list = [{
    table_number: 1,
    name: "Smith",
    num_people_in_party: 4,
    time: "1600",
    status: "reserved"
}]

// Create Restaurant Waiting List
rest_wait_list = [{
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

app.get("/makeReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "public/make-reservation.html"));
});

//POST Route
app.post("/makeReservation", function(req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    if (rest_table_list.length < 5) {
        rest_table_list.push(newReservation);
    } else {
        rest_wait_list.push(newReservation);
    }
    res.send(newReservation);
});

app.get("/api/reservation", function(req, res) {
    return res.json(rest_table_list);
});


app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/view-tables.html"));
});
app.get("/api/tables", function(req, res) {
    return res.json(rest_wait_list);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log([rest_table_list, rest_wait_list])
});