
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

      <h1 className='text-center text-danger fw-bolder'>Cocktails</h1>
      <p className='text-center'><Link style={{color:"blue",textDecoration:"none",fontSize:"20px"}} to='/drink2'>Drink2</Link></p>
      
      <label htmlFor="search" className='ms-4'>
       Inserisci un nuovo cocktail:
       <input type="text" value={search} onChange={ (e) => setSearch(e.target.value)}/>
       <button onClick={()=>setSearch2(search)} >Cerca</button>
      </label>

      <div className="categoria">

         <h3 className='text-dark'>Categoria</h3>
         <button onClick={handlefilter} className="btn btn-danger ms-3 mt-3" >Categoria Cocktail</button>
         <button onClick={handlefilter2} className="btn btn-danger ms-3 mt-3" >Categoria Ordinary Drink</button>
         <button onClick={handlereset} className="btn btn-danger ms-3 mt-3">Reset</button>

      </div>
      

       <div className="gradazione">

              <h3 className='text-dark'>Gradazione</h3>
              <button onClick={handlefilter3} className="btn btn-danger ms-3 mt-3" >Alcolica</button>
              <button onClick={handlefilter4} className="btn btn-danger ms-3 mt-3">Analcolica</button>
              <button onClick={handlereset} className="btn btn-danger ms-3 mt-3">Reset</button>
        </div>

        <div className="bicchieri">

              <h3 className='text-dark'>Glass</h3>
              <button onClick={handlefilter5} className="btn btn-danger ms-3 mt-3">Shot Glass</button>
              <button onClick={handlefilter6} className="btn btn-danger ms-3 mt-3">Cocktail Glass</button>
              <button onClick={handlefilter7} className="btn btn-danger ms-3 mt-3">Highball Glass</button>
              <button onClick={handlefilter8} className="btn btn-danger ms-3 mt-3">Old-fashioned Glass</button>
              <button onClick={handlereset} className="btn btn-danger ms-3 mt-3">Reset</button>
        </div>
     

         
         
       
      
       
       <div className='card2'>
       {
        drinks?.map( drink => <Drink key={drink?.idDrink} {...drink} />)
       }
       </div>
    </div>
  )
}

export default Drinkapi