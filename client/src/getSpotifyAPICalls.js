import {useEffect, useRef, useState} from "react";
import axios from "axios";
import './getSpotifyAPICalls.css'


function CallAPI(props){

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    let [currArtNum, setArtNum] = useState(0)
    const {query, type} = props;
    const searchKeyRef = useRef()
    searchKeyRef.current = searchKey

    const currNumRef = useRef()
    currNumRef.current = currArtNum
    function getToken() {
        let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
        let token = urlParams.get('access_token');
        console.log(token)
        setToken(token)
        return token
    }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    useEffect(() => {
        searchKeyRef.current = "Bob"
        console.log(searchKeyRef.current)

        const fetchData = async () => {
            // e.preventDefault()
            let token = getToken()
            const {data} = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: query,
                    type: type
                }
            })

            setArtists(data.artists.items)
        }
        fetchData().then(r => false);

    }, [])
    /*
    const searchArtists = async (props) => {
        setSearchKey("Bob")
        searchKeyRef.current = "Bob"
        console.log(searchKeyRef.current)
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKeyRef.current,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }
     */

    // setSearchKey("Bob")
    console.log(searchKey)
    // searchArtists(props)
    const renderArtists = () => {
        if(artists.length !== 0) {
            currNumRef.current = currNumRef.current + 1
            let currArtNum = currNumRef.current
            console.log(artists[currArtNum-1])
            var test = artists[currArtNum-1]
            return  <div key={artists[currArtNum-1].id}>
                {artists[currArtNum-1].images.length ? <img width={"100%"} src={artists[currArtNum-1].images[0].url} alt=""/> : <div>No Image</div>}
                <a target="_blank" rel="noopener noreferrer" href={artists[currArtNum-1].external_urls.spotify}>{artists[currArtNum-1].name}</a>
            </div>
        }
        else{
            return <div><h2>Hi</h2></div>
        }
        /*return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify}>{artist.name}</a>
            </div>
            {renderArtists()}*/
    }
    // getToken()
    return (

        <div className="APIClass">
            {renderArtists()}
        </div>


    );
}

export default CallAPI;