import {useEffect, useState} from "react";
import axios from 'axios';


function LoginSpotify(props) {
    const CLIENT_ID = "ee003c00dbad406b99277f7c61394050"
    // const REDIRECT_URI = "http://localhost:3000/LoginSpotify"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    // const [searchKey, setSearchKey] = useState("")
    // const [artists, setArtists] = useState([])

    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    //     console.log(token)
    // }
    //
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")



        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])
    //
    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }
    //
    // const searchArtists = async (e) => {
    //     e.preventDefault()
    //     var token1 = ("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    // },
    //     params: {
    //         q: searchKey,
    //             type: "artist"
    //     },});
    //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "artist"
    //         }
    //     })
    //
    //     setArtists(data.artists.items)
    // }
    //
    // const renderArtists = () => {
    //     return artists.map(artist => (
    //         <div key={artist.id}>
    //             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
    //             <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify}>{artist.name}</a>
    //         </div>
    //     ))
    // }

    return (
        <div className="App">
                <h1>Spotify React</h1>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                    to Spotify</a>
        </div>
    );
}

export default LoginSpotify;