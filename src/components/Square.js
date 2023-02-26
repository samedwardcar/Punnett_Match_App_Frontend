
import React , {useState} from "react";
import PunnettSqure from 'punnett-square';

const Square = () => {
    const [dadPaternalFreckleValue, setDadPaternalFreckleValue] = useState('Freckles');
    const [dadMaternalFreckleValue, setDadMaternalFreckleValue] = useState('No Freckles');
    const [momPaternalFreckleValue, setMomPaternalFreckleValue] = useState('Freckles');
    const [momMaternalFreckleValue, setMomMaternalFreckleValue] = useState('No Freckles');
    const [paternalBaldness, setPaternalBaldness] = useState('Bald');
    const [maternalBaldness, setMaternalBaldness] = useState('Not Bald');
    const [paternalDimples, setPaternalDimples] = useState('Dimples');
    const [maternalDimples, setMaternalDimples] = useState("No Dimples");
    const [FreckleSquare, setFreckleSquare] = useState([])
    const onChange = (event, updateFunction) => {
        console.log(event.target.value)
        const value = event.target.value;
        updateFunction(value);
    };

    const handleCalulation = () => {
        const FreckleTraits = ['Freckles', 'No Freckles'];
        const freckleSquare = new PunnettSqure(FreckleTraits);
        const MOM = [momMaternalFreckleValue, momPaternalFreckleValue];
        const DAD = [dadPaternalFreckleValue, dadMaternalFreckleValue];
        const cross = freckleSquare.cross(MOM, DAD)
        
        setFreckleSquare(cross)
          console.log(  { cross } )
        


    }

    const style = {
        border: 'solid',

    }

    return(
        <>
        <h1>Square Page punnett</h1>
        <div>
            <label>Father: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setDadPaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{dadPaternalFreckleValue}</h2>}
            <label>Mother: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setDadMaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{dadMaternalFreckleValue}</h2>}
        </div>
        <div>
            <label>Father: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setMomPaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{momPaternalFreckleValue}</h2>}
            <label>Mother: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setMomMaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {momMaternalFreckleValue && <h2>{momMaternalFreckleValue}</h2>}
        </div>
        <div>
            <label>Father Bald or not?</label>
            <select onChange={(e) => onChange(e, setPaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            {paternalBaldness && <h2>{paternalBaldness}</h2>}

            <label>Mother's father Bald or not?</label>
            <select onChange={(e) => onChange(e, setMaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            {maternalBaldness && <h2>{maternalBaldness}</h2>}
        </div>
        <div>
            <label>Father Dimples?</label>
            <select onChange={(e) => onChange(e, setPaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">No Dimples</option>
            </select>
            <h2>{paternalDimples}</h2>
            <label>Mother Dimples?</label>
            <select onChange={(e) => onChange(e, setMaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">Not Bald</option>
            </select>
            <h2>{maternalDimples}</h2>
        </div>
        <div>
            <button onClick={handleCalulation}>Calculate</button>
            
        </div>
        <div>
            {FreckleSquare.length > 0 &&   
                FreckleSquare.map((elem, idx) => {
                    return (
                        <div style={style} key={`box=${idx}`}>
                            <span>{elem[0]}</span>
                            <span>{elem[1]}</span>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}



export default Square;