require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var liri = process.argv[2];
var movieName = process.argv[3];
var spotify = new Spotify(keys.spotify);

switch (liri) {
    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-This":
        movieThis();
        break

    case "concert-this":
        concertThis();
        break

    case "do-what-it-says":
        doWhatItSays();
        break
};

function movieThis() {

    if (!movieName) {
        movieName = "mr. nobody"
    }
    else {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        request(queryUrl, function (response, body) {
            var movieResponse = JSON.parse(body);
            var results =
                "Title: " + movieResponse.Title + "\n" +
                "Year: " + movieResponse.Year + "\n" +
                "IMDB Rating: " + movieResponse.Ratings[0].value + "\n" +
                "Rotten Tomatoes Rating " + movieResponse.Ratings[1].value + "\n" +
                "Origin Country: " + movieResponse.Country + "\n" +
                "Language: " + movieResponse.Language + "\n" +
                "Plot: " + movieResponse.Plot + "\n" +
                "Actors: " + movieResponse.Actors + "\n"

            fs.appendFile("random.txt", results, function (err) {
                console.log("saved")
            })
            console.log(results);
        });
    }
};

function spotifySong(songName) {
     if (!songName) {
         songName= "The Sign";
     }

     spotify.search({ type: 'track', query:songName}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var results = 
        "Artist: " + data.tracks.items[0].artist[0].name + "\n" +
        "Song Name: " + data.tracks.items[0].name + "\n" +
        "Album Name: " + data.tracks.items[0].album.name + "\n" +
        "Preview Link: " + data.tracks.items[0].preview_url + "\n";
       
        fs.appendFile("random.txt", results, function (err) {
            console.log ("saved");
        })
      console.log(results); 
      });
}

function concertThis() {


}

function doWhatItSays() {

}