import React, {useEffect, useRef, useState} from 'react';
// import querystring from "querystring";

function SetupSpotify(props){

    var client_id = 'ee003c00dbad406b99277f7c61394050'; // Your client id
    var client_secret = 'ec7e9b9dd00848429ca50de22741574f'; // Your secret
    var redirect_uri = 'http://localhost:3000/callback';

    var generateRandomString = function(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    var state = generateRandomString(16);

    const getStuff = fetch(`https://localhost:3000/login`).then((res) => {
        var scope = 'user-read-private user-read-email';
        window.location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id='+client_id+
            '&scope=' + scope + '&redirect_uri=' + redirect_uri + '&state=' + state
            /*querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            });*/
    }).catch(function (err) {
        console.info(err);
    });
    console.log(getStuff)
    return (
        <div className="App">
            <h2>Hi</h2>
        </div>
    );
}

export default SetupSpotify();