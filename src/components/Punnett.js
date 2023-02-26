import React from "react";
import PunnettSquare from 'punnett-square';


const FrecklesTraits = ['F', 'f'];
const Freckles = new PunnettSquare(FrecklesTraits);
const MOM = ['F', 'f']
const DAD = ['f', 'f']

const cross = Freckles.cross(MOM, DAD);

var dalleles = [ document.getElementById('dallele1'), document.getElementById('dallele2') ]
// var dallele2 = document.getElementById('dallele2')
var malleles = [ document.getElementById('mallele1'), document.getElementById('mallele2') ]
// var mallele2 = document.getElementById('mallele2')
const FrecklesDynamic = new PunnettSquare(FrecklesTraits);
var mom = { malleles };
var dad = { dalleles };
// const dad = ['${dallele1}', '${dallele2}']
console.log({ dalleles })

const dynamicCross = FrecklesDynamic.cross(mom, dad);

export default function Punnett(){
    return(
        <>
    <h1>Punnett Square</h1>
   
    <div>
        Static results are: {cross}
      
    </div>
    <div>
        <p>Dad's Geneotype:
            <label for ='dalleles'>Allele's</label>
                <select name="dallele1" id="dallele1">
                    <option defaultValue="F">F</option>
                    <option value="f">f</option>
                </select>
                <select name="dallele2" id="dallele2">
                    <option value="F">F</option>
                    <option defaultValue="f">f</option>
                </select>
        </p>  
        <p>Mom's Geneotype:
            <label for ='malleles'>Allele's</label>
                <select name="mallele1" id="mallele1">
                    <option value="F" selected>F</option>
                    <option value="f">f</option>
                </select>
                <select name="mallele2" id="mallele2">
                    <option value="F" selected>F</option>
                    <option value="f">f</option>
                </select>
        </p> 
        Dynamic results are: {dynamicCross}
    </div>
    </>
    )
}