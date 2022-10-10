import React from "react"
import memesData from "../memesData"


export default function Meme () {

    const [memeImage, setImage] = React.useState("")

    function getMemes(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setImage(url)
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="shut up" />
                <input className="form--input" type="text" placeholder="and take my money"/>
                <button className="form--button" onClick={getMemes}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="main--image" />
        </main>
    )
}