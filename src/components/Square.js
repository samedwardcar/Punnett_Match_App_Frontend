
import React , {useState} from "react";
import PunnettSqure from 'punnett-square';

const Square = () => {
    const [paternalFreckleValue, setPaternalFreckleValue] = useState('Freckles');
    const [maternalFreckleValue, setMaternalFreckleValue] = useState('Freckles');
    const [paternalBaldness, setPaternalBaldness] = useState(null);
    const [maternalBaldness, setMaternalBaldness] = useState(null);
    const [paternalDimples, setPaternalDimples] = useState(null);
    const [maternalDimples, setMaternalDimples] = useState(null);
    const [square, setSquare] = useState([])
    const onChange = (event, updateFunction) => {
        console.log(event.target.value)
        const value = event.target.value;
        updateFunction(value);
    };

    const handleCalulation = () => {
        const FreckleTraits = ['Freckles', 'No Freckles'];
        const freckleSquare = new PunnettSqure(FreckleTraits);
        const MOM = [maternalFreckleValue, paternalFreckleValue];
        const DAD = [paternalFreckleValue, maternalFreckleValue];
        const cross = freckleSquare.cross(MOM, DAD)
        console.log(maternalFreckleValue, paternalFreckleValue)
        setSquare(cross)
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
            <select onChange={(e) => onChange(e, setPaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {paternalFreckleValue && <h2>{paternalFreckleValue}</h2>}
            <label>Mother: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setMaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {maternalFreckleValue && <h2>{maternalFreckleValue}</h2>}
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
            {square.length > 0 &&   
                square.map((elem, idx) => {
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