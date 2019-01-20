console.log('this is loaded');
var SPOTIFY_ID = "74f2127dedc8480684b2e8fede5fe0ae";
var SPOTIFY_SECRET ="4799ecf6e75647749e60e6bb5040d2cf";

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "74f2127dedc8480684b2e8fede5fe0ae",
  secret: "4799ecf6e75647749e60e6bb5040d2cf"
});
 


exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
