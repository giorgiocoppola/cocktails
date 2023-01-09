
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Drink from './Drink';
import './Drinkapi.css'


const Drinkapi = () => {

  const [drinks,setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [search2,setSearch2] = useState("");
  const [originalArray,setOriginalArray] = useState([]);
  

 
 

  const getCocktail = (drinks) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)  
       

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
    getCocktail(search2)
    console.log("UseEffect scattato, sto facando una chiamata con parametro ", search2)

        
    
  
  },[search2])





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
    <div className='card-princ'>
      
      <label htmlFor="search">
       Inserisci un nuovo cocktail:
       <input type="text" value={search} onChange={ (e) => setSearch(e.target.value)}/>
       <button onClick={()=>setSearch2(search)} >Cerca</button>
      </label>

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
     

          <h1 className='text-center text-danger fw-bolder'>Cocktails</h1>
          <p className='text-center'><Link style={{color:"blue",textDecoration:"none",fontSize:"20px"}} to='/drink2'>Drink2</Link></p>
         
       
      
       
       <div className='card2'>
       {
        drinks?.map( drink => <Drink key={drink?.idDrink} {...drink} />)
       }
       </div>
    </div>
  )
}

export default Drinkapi