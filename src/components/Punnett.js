import React from "react";
import PunnettSquare from 'punnett-square';


const FrecklesTraits = ['F', 'f'];
const Freckles = new PunnettSquare(FrecklesTraits);
const MOM = ['${ mallele1 }', '${mallele2}']
const DAD = ['f', 'f']

const cross = Freckles.cross(MOM, DAD);

export default function Punnett(){
    return(
        <>
    <h1>Punnett Square</h1>
   
    <div>
        Your results are: {cross}
    </div>
    <div>
        <p>Dad's Geneotype:
            <label for ='dalleles'>Allele's</label>
                <select name="dallele1" id="dallele1">
                    <option value="F" selected>F</option>
                    <option value="f"></option>
                </select>
                <select name="dallele2" id="dallele2">
                    <option value="F" selected>F</option>
                    <option value="f"></option>
                </select>
        </p>  
        <p>Mom's Geneotype:
            <label for ='malleles'>Allele's</label>
                <select name="mallele1" id="mallele1">
                    <option value="F" selected>F</option>
                    <option value="f"></option>
                </select>
                <select name="mallele2" id="mallele2">
                    <option value="F" selected>F</option>
                    <option value="f"></option>
                </select>
        </p> 
    </div>
    </>
    )
}