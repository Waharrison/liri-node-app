require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var liri = process.argv[2];
var movieName = process.argv[3];
var spotify = new Spotify(keys.spotify);

switch (liri) {
    case "spotify-this-song" :
    spotifyThisSong();
    break;

    case "movie-This" :
    movieThis();
    break

    case "concert-this":
    concertThis();
    break
};

function movieThis() {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (response, body) {
        var movieResponse = JSON.parse(body);
        var results =
        "Title: " + movieResponse.Title + "/n" +
        "Year: " + movieResponse.Year + "/n" +
        "IMDB Rating: " + movieResponse.Ratings[0].value + "/n" +
        "Rotten Tomatoes Rating " + movieResponse.Ratings[1].value + "/n" +
        "Origin Country: " + movieResponse.Country + "/n" +
        "Language: " + movieResponse.Language + "/n" +
        "Plot: " + movieResponse.Plot + "/n" +
        "Actors: " + movieResponse.Actors + "/n"
   
   console.log(results);
    });
};