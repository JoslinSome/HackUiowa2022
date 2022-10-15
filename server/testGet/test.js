var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: 'ee003c00dbad406b99277f7c61394050',
    clientSecret: 'a4263eaa3bd346bf9cd151177ef1a81b',
    redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken('BQDHudK3I9Job0BTNbqi1nZJ6VLFUH1731Ebr6WsMwpAsdpjbozIsh_FAnpWh2b4ekb25PNbv9oTAFJewYLkvCtUq293VDZoZ7WK2i969Nrw_jsgSh58m__BwDW07LGQ9UBaKYeMISmESHhz0LGq8G_CWepfaxUj6xtvf6LHTkaPrSwOLkyLrv900Ecb12h2SBJq');