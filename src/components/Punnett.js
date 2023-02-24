import React from "react";
import PunnettSquare from 'punnett-square';


const FrecklesTraits = ['F', 'f'];
const Freckles = new PunnettSquare(FrecklesTraits);
const MOM = ['F', 'f']
const DAD = ['f', 'f']

const cross = Freckles.cross(MOM, DAD);

export default function Punnett(){
    return(
        <>
    <h1>Punnett Square</h1>
    <table>
        <input></input>
        <input></input>
    </table>
    <div>
        Your results are: {cross}
    </div>
    </>
    )
}