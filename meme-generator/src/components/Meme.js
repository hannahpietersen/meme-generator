import React from "react"
import memesData from "../memesData.js"

export default function Meme(){
    
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    

function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))

}
    
    
    return (
       <main>
        <div className="form">
            <input 
            type="text" 
            className="form-input"
            placeholder="Top Text">

            </input>
            <input 
            type="text"
            className="form-input"
            placeholder="Bottom Text"
            >

            </input>
            <button 
            onClick={getMemeImage}
            className="form-button">
                Get a new meme image 🖼️
                </button>
        </div>
        <img src={meme.randomImage} className="meme--image"  alt="meme-img" />
       </main>
    )
}