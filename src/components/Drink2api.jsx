import React, { useState, useEffect} from 'react'
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

 const handlereset  = () => {

     setDrinks(originalArray);
 }

  return (
    <div>
        <label htmlFor="letter">Inserisci il cocktail con la lettera 
            <input type="text" value={letter} onChange = { e => setLetter(e.target.value)} />
        </label>
        <button onClick={ () => setLetter2(letter) }>Cerca</button>
        <button onClick={handlefilter} >Categoria Cocktail</button>
        <button onClick={handlefilter2} >Categoria Ordinary Drink</button>
        <button onClick={handlereset} >Reset</button>
    

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