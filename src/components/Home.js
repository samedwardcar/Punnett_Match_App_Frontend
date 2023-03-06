import React from "react"
import pups from '../images/pups.jpg'


export default function Home(){
    return(
        <>
        <body>
        <h1>Home Page punnett</h1>
        <img src={ pups } alt="puppy"style={{ width: '400px', }}/>
        </body>
        </>
    )
}