var SpotifyWebApi = require('spotify-web-api-node');
const KeyClass = require('./keys')
const key = new KeyClass()
/*
// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: 'ee003c00dbad406b99277f7c61394050',
    clientSecret: key.getSecret(),
    redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken(key.getAccessTok());/*
spotifyApi
    .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
    .then(
        function(data) {
            console.log('Album information', data.body);
        },
        function(err) {
            console.error(err);
        }
    );


spotifyApi.getMe()
    .then(function(data) {
        console.log('Some information about the authenticated user', data.body);
    }, function(err) {
        console.log('Something went wrong!', err);
    });

spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
    .then(function(data) {
        console.log(data.body);
        done();
    }, function(err) {
        console.log("Something went wrong!", err);
    });

spotifyApi
    .getNewReleases({ limit : 5, offset: 0, country: 'SE' })
    .then(
        function(data) {
            console.log('Album information', data.body);
        },
        function(err) {
            console.error(err);
        }
    );
*/
var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'http://localhost:3000/callback',
    clientId = 'ee003c00dbad406b99277f7c61394050'

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);