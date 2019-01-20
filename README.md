# liri-node-

Overview
 LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

 API's used
 - Spotify
 - OMDB
 - Bands in Town

 Technology used
 - Moment
 - Axios
 - DotEnv
 - Node-Spotify-API

 How it works:
 Liri.js can take in one of the comands below and return results in the terminal or console.

 - concert-this "band name"
    returns
        - Name of the venue
        - Venue Location
        - Date of the event

- spotify-this-song "song name"
    returns
        - Artist
        - Song Name
        - Preview link of the song from Spotify
        - Album the song is on

- movie-this "movie name"
    returns
    - Title of the movie
    - Year the movie came out
    - IMDB rating of the movie
    - Rotten Tomatoes Rating of the movie
    - Country where the movie was produced
    - Language of the movie
    - Plot of the movie
    - Actors in the movie
 if the you do not type in a movie the results will return the movie "Mr. Nobody".
- do-what-it-says
 retuns
    - It will run spotify-this-song for "I want it That way" followed by the text in the random.txt file.

