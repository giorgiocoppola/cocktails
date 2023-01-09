import React, { useState, useEffect} from 'react'
import './Drink2api.css'
import { Link } from 'react-router-dom'
import Drink2 from './Drink2';
import axios from 'axios'

function Drink2api() {

    const [drinks,setDrinks] = useState([]);
    const [letter,setLetter] = useState("");
    const [letter2,setLetter2] = useState("");
    const [originalArray,setOriginalArray] = useState([])

    const getCocktail = (drinks) => {

        
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinks}`)
    
        .then( res => {
             console.log(res);
             setDrinks(res?.data?.drinks);
             setOriginalArray(res?.data?.drinks);
        })
    
        .catch(err => {
          console.log(err)
        })
    
      }

      useEffect( () => {

        getCocktail(letter2);
        console.log("Useeffect scattato")

      },[letter2]);
      
    
      const handlefilter = () => {
         
        const drinksfilter = originalArray.filter( drink => drink.strCategory === "Cocktail")
        setDrinks(drinksfilter);
       
    }
 
    const handlefilter2 = () => {
          
      const drinksfilter = originalArray.filter( drink => drink.strCategory === "Ordinary Drink")
      setDrinks(drinksfilter);
    
    }

    const handlefilter3 = () => {
         
      const drinksfilter = originalArray.filter( drink => drink.strAlcoholic === "Alcoholic")
      setDrinks(drinksfilter);
 
    }

    const handlefilter4 = () => {
    
      const drinksfilter = originalArray.filter( drink => drink.strAlcoholic === "Non alcoholic")
      setDrinks(drinksfilter);

}

const handlefilter5 = () => {
         
  const drinksfilter = originalArray.filter( drink => drink.strGlass === "Shot Glass")
  setDrinks(drinksfilter);

}

const handlefilter6 = () => {

  const drinksfilter = originalArray.filter( drink => drink.strGlass === "Cocktail glass")
  setDrinks(drinksfilter);

}

const handlefilter7 = () => {

  const drinksfilter = originalArray.filter( drink => drink.strGlass === "Highball glass")
  setDrinks(drinksfilter);

}

const handlefilter8 = () => {

  const drinksfilter = originalArray.filter( drink => drink.strGlass === "Old-fashioned glass")
  setDrinks(drinksfilter);

}

 const handlereset  = () => {

     setDrinks(originalArray);
 }

  return (
    <div>
        <label htmlFor="letter">Inserisci il cocktail con la lettera 
            <input type="text" value={letter} onChange = { e => setLetter(e.target.value)} />
        </label>
        <button onClick={ () => setLetter2(letter) }>Cerca</button>

        <div className="categoria">
              <button onClick={handlefilter} >Categoria Cocktail</button>
              <button onClick={handlefilter2} >Categoria Ordinary Drink</button>
              <button onClick={handlereset} >Reset</button>
        </div>

        <div className="gradazione">
              <button onClick={handlefilter3} >Bevande alcoliche</button>
              <button onClick={handlefilter4} >Bevande analcoliche</button>
              <button onClick={handlereset} >Reset</button>
        </div>
     
        <div className="bicchieri">
              <button onClick={handlefilter5} >Shot Glass</button>
              <button onClick={handlefilter6} >Cocktail Glass</button>
              <button onClick={handlefilter7} >Highball Glass</button>
              <button onClick={handlefilter8} >Old-fashioned Glass</button>
              <button onClick={handlereset} >Reset</button>
        </div>
    

         <h1 className='text-center text-danger fw-bolder'>Cocktails 2</h1>
          <p style={{textAlign:"center"}}><Link style={{color:"blue",textDecoration:"none",fontSize:"20px"}} to='/'>Drink</Link></p>

         <div className='card2'>
       {
        drinks?.map( drink => <Drink2 key={drink?.idDrink} {...drink} />)
       }
       </div>
    </div>
  )
}

export default Drink2api