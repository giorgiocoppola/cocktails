import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Drink2 from './Drink2';
import axios from 'axios'

function Drink2api() {

    const [drinks,setDrinks] = useState([]);
    const [letter,setLetter] = useState("");
    const [letter2,setLetter2] = useState("");

    const getCocktail = (drinks) => {

        
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinks}`)
    
        .then( res => {
             console.log(res);
             setDrinks(res?.data?.drinks);
        })
    
        .catch(err => {
          console.log(err)
        })
    
      }

      useEffect( () => {

        getCocktail(letter2);
        console.log("Useeffect scattato")

      },[letter2]);
      
    

  return (
    <div>
        <label htmlFor="letter">Inserisci il cocktail con la lettera 
            <input type="text" value={letter} onChange = { e => setLetter(e.target.value)} />
        </label>
        <button onClick={ () => setLetter2(letter) }>Cerca</button>
         <h1 style={{textAlign:"center",color:"red"}}>Cocktails 2</h1>
          <p style={{textAlign:"center"}}><Link style={{color:"blue",textDecoration:"none"}} to='/'>Drink</Link></p>

         <div className='card2'>
       {
        drinks?.map( drink => <Drink2 key={drink?.idDrink} {...drink} />)
       }
       </div>
    </div>
  )
}

export default Drink2api