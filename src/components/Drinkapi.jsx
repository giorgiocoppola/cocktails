
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Drink from './Drink';
import './Drinkapi.css'


const Drinkapi = () => {

  const [drinks,setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [search2,setSearch2] = useState("");
  

 
 

  const getCocktail = (drinks) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)  
       

    .then( res => {
         console.log(res);
         setDrinks(res?.data?.drinks);
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
         
       const drinksfilter = drinks.filter( drink => drink.strCategory === "Cocktail")
       setDrinks([...drinksfilter]);
      
   }

   const handlefilter2 = () => {
         
    const drinksfilter = drinks.filter( drink => drink.strCategory === "Ordinary Drink")
    setDrinks([...drinksfilter]);
   
}

           


 const resetdrinks = () => {

  setDrinks(drinks);
}
  
  return (
    <div className='card-princ'>
      
      <label htmlFor="search">
       Inserisci un nuovo cocktail:
       <input type="text" value={search} onChange={ (e) => setSearch(e.target.value)}/>
       <button onClick={()=>setSearch2(search)} >Cerca</button>
      </label>
       <button onClick={handlefilter} >Categoria Cocktail</button>
       <button onClick={handlefilter2} >Categoria Ordinary Drink</button>
       <button onClick={resetdrinks} >Reset</button>
     

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