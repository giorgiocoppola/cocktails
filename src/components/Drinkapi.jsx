
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
  
  return (
    <div className='card-princ'>
      
      <label htmlFor="search">
       Inserisci un nuovo cocktail:
       <input type="text" value={search} onChange={ (e) => setSearch(e.target.value)}/>
       <button onClick={()=>setSearch2(search)} >Cerca</button>
      </label>
          <h1 style={{textAlign:"center",color:"red"}}>Cocktails</h1>
          <p style={{textAlign:"center"}}><Link style={{color:"blue",textDecoration:"none"}} to='/drink2'>Drink2</Link></p>
         
       
      
       
       <div className='card2'>
       {
        drinks?.map( drink => <Drink key={drink?.idDrink} {...drink} />)
       }
       </div>
    </div>
  )
}

export default Drinkapi