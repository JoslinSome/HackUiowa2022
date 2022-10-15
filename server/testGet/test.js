var SpotifyWebApi = require('spotify-web-api-node');
const KeyClass = require('./keys')
const key = new KeyClass()

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: 'ee003c00dbad406b99277f7c61394050',
    clientSecret: key.getSecret(),
    redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken(key.getAccessTok());

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




