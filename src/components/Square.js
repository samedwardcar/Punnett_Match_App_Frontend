
import React , {useState} from "react";
import PunnettSqure from 'punnett-square';
import { Grid, Typography } from "@mui/material";

const Square = () => {
    //freckles
    const [dadPaternalFreckleValue, setDadPaternalFreckleValue] = useState('Freckles');
    const [dadMaternalFreckleValue, setDadMaternalFreckleValue] = useState('No Freckles');
    const [momPaternalFreckleValue, setMomPaternalFreckleValue] = useState('Freckles');
    const [momMaternalFreckleValue, setMomMaternalFreckleValue] = useState('No Freckles');
    //baldness
    const [dadPaternalBaldness, setDadPaternalBaldness] = useState('Bald');
    const [dadMaternalBaldness, setDadMaternalBaldness] = useState('Not Bald');
    const [momPaternalBaldness, setMomPaternalBaldness] = useState('Bald');
    const [momMaternalBaldness, setMomMaternalBaldness] = useState('Not Bald');
    //dimples
    const [dadPaternalDimples, setDadPaternalDimples] = useState('Dimples');
    const [dadMaternalDimples, setDadMaternalDimples] = useState("No Dimples");
    const [momPaternalDimples, setMomPaternalDimples] = useState('Dimples');
    const [momMaternalDimples, setMomMaternalDimples] = useState("No Dimples");

    //squares
    const [FreckleSquare, setFreckleSquare] = useState([]);
    let [baldSquare, setBaldSquare] = useState([]);
    let [dimpleSquare, setDimpleSquare] = useState([]);

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
        const freckleCross = freckleSquare.cross(MOM, DAD);
        setFreckleSquare(freckleCross);
        console.log(  { freckleCross } )
        
        let baldTraits = ['Bald', 'Not Bald'];
        let baldSquare = new PunnettSqure(baldTraits);
        let momBaldness = [momPaternalBaldness, momMaternalBaldness];
        let dadBaldness = [dadPaternalBaldness, dadMaternalBaldness];
        let baldCross = baldSquare.cross(momBaldness, dadBaldness);
        setBaldSquare(baldCross);
        
        let dimpleTraits = ['Dimples', 'No Dimples'];
        let dimpleSquare = new PunnettSqure(dimpleTraits);
        let momDimple = [momPaternalDimples, momMaternalDimples];
        let dadDimple = [dadPaternalDimples, dadMaternalDimples];
        let dimpleCross = dimpleSquare.cross(momDimple, dadDimple);
        setDimpleSquare(dimpleCross);
        
  
        


    }

    const style = {
        border: 'solid white',

    }

    return(
        <>
        <h1>Square Page punnett</h1>
        
           <Grid container 
                justifyContent="center"
                >
            <Grid item xs={4}>
            <label>Dad's Father: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setDadPaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{dadPaternalFreckleValue}</h2>}
            <label>Dad's Mother: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setDadMaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{dadMaternalFreckleValue}</h2>}
            </Grid>
            
        
       
        <Grid item xs={4}>
            <label>Mom's Father: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setMomPaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {<h2>{momPaternalFreckleValue}</h2>}
            <label>Mom's Mother: Freckles or not?</label>
            <select onChange={(e) => onChange(e, setMomMaternalFreckleValue)} className='form-select'>
            
                <option value="Freckles">Freckles</option>
                <option value="No Freckles">No Freckles</option>
            </select>
            {momMaternalFreckleValue && <h2>{momMaternalFreckleValue}</h2>}
        </Grid>
        </Grid>
        <Grid 
            container
            justifyContent="center"
            >
            <Grid item xs={4}>
            <label> Dad's Father Bald or not?</label>
            <select onChange={(e) => onChange(e, setDadPaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            { <h2>{dadPaternalBaldness}</h2>}

            <label>Dad's Mother's father Bald or not?</label>
            <select onChange={(e) => onChange(e, setDadMaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            {<h2>{dadMaternalBaldness}</h2>}
            </Grid>
        <Grid item xs={4}>
            <label>Mom's Father Bald or not?</label>
            <select onChange={(e) => onChange(e, setMomPaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            { <h2>{momPaternalBaldness}</h2>}

            <label>Mom's Mother's father Bald or not?</label>
            <select onChange={(e) => onChange(e, setMomMaternalBaldness)} className='form-select'>
                <option value="Bald">Bald</option>
                <option value="Not Bald">Not Bald</option>
            </select>
            {<h2>{momMaternalBaldness}</h2>}
        </Grid>
        </Grid>
        <Grid 
            container
            justifyContent="center"
            >
        <Grid item xs={4}>
            <label>Dad's Father Dimples?</label>
            <select onChange={(e) => onChange(e, setDadPaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">No Dimples</option>
            </select>
            <h2>{dadPaternalDimples}</h2>
            <label>Dad's Mother Dimples?</label>
            <select onChange={(e) => onChange(e, setDadMaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">No Dimples</option>
            </select>
            <h2>{dadMaternalDimples}</h2>
        </Grid>
        <Grid item xs={4}>
            <label>Mom's Father Dimples?</label>
            <select onChange={(e) => onChange(e, setMomPaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">No Dimples</option>
            </select>
            <h2>{momPaternalDimples}</h2>
            <label>Mom's Mother Dimples?</label>
            <select onChange={(e) => onChange(e, setMomMaternalDimples)} className='form-select'>
                <option value="Dimples">Dimples</option>
                <option value="No Dimples">No Dimples</option>
            </select>
            <h2>{momMaternalDimples}</h2>
        </Grid>
        </Grid>
        <div>
            <button onClick={handleCalulation}>Calculate</button>
            
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <Typography variant="h6" gutterBottom>Your baby's chances of having freckles:</Typography>
  <div style={{ width: "200px", height: "200px", display: "flex", justifyContent: "center", margin: "20px auto" }}>
    <Grid container spacing={2} justify="center">
      {[0, 1].map((row) => (
        <Grid key={`row-${row}`} item container xs={6} spacing={2} direction="column" alignItems="center">
          {[0, 1].map((col) => {
            const idx = row * 2 + col;
            const elem = FreckleSquare[idx] || []; // handle case where FreckleSquare has less than 4 elements
            return (
              <Grid style={style} item key={`box=${idx}`} container xs={6} direction="column" alignItems="center">
                <Grid item>
                  <span>{elem[0]}</span>
                </Grid>
                <Grid item>
                  <span>{elem[1]}</span>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  </div>
</div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <Typography variant="h6" gutterBottom>Your baby's chances of being bald:</Typography>
  <div style={{ width: "200px", height: "200px", display: "flex", justifyContent: "center", margin: "20px auto" }}>
    <Grid container spacing={2} justify="center">
      {[0, 1].map((row) => (
        <Grid key={`row-${row}`} item container xs={6} spacing={2} direction="column" alignItems="center">
          {[0, 1].map((col) => {
            const idx = row * 2 + col;
            const elem = baldSquare[idx] || []; // handle case where baldSquare has less than 4 elements
            return (
              <Grid style={style} item key={`box=${idx}`} container xs={6} direction="column" alignItems="center">
                <Grid item>
                  <span>{elem[0]}</span>
                </Grid>
                <Grid item>
                  <span>{elem[1]}</span>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  </div>
</div>
<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <Typography variant="h6" gutterBottom>Your baby's chances of having dimples:</Typography>
  <div style={{ width: "200px", height: "200px", display: "flex", justifyContent: "center", margin: "20px auto" }}>
    <Grid container spacing={2} justify="center">
      {[0, 1].map((row) => (
        <Grid key={`row-${row}`} item container xs={6} spacing={2} direction="column" alignItems="center">
          {[0, 1].map((col) => {
            const idx = row * 2 + col;
            const elem = dimpleSquare[idx] || []; // handle case where dimpleSquare has less than 4 elements
            return (
              <Grid style={style} item key={`box=${idx}`} container xs={6} direction="column" alignItems="center">
                <Grid item>
                  <span>{elem[0]}</span>
                </Grid>
                <Grid item>
                  <span>{elem[1]}</span>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  </div>
</div>
        </>
    )
}



export default Square;