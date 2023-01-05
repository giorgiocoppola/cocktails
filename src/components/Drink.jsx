import React, { useState } from 'react'
import './Drink.css'

function Drink({strDrinkThumb,strDrink,strAlcoholic,strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4}) {

    const [count,setCount] = useState(0);
    const max = 5;

    const handleincrement = () => {

        if(count < max) {

           setCount( count + 1 );

        } else {

           setCount(max);
        }
    }

    
    const handledecrement = () => {

      if(count > 0) {

         setCount( count - 1 );

      } else {

         setCount(0);
      }
  }

  return (
    <>
      <div className="card">
         <img src={strDrinkThumb} alt={strDrink} width="300px" height="300px"/>
         <h3 style={{textAlign:"center"}}>{strDrink}</h3>
         <p style={{textAlign:"center"}}>Graduation: {strAlcoholic}</p>
         <p style={{textAlign:"center"}}>Category: {strCategory}</p>
         <p style={{textAlign:"center"}}>Ingredients:</p>
         <ul>
            <li style={{textAlign:"center"}}>{strIngredient1}</li>
            <li style={{textAlign:"center"}}>{strIngredient2}</li>
            <li style={{textAlign:"center"}}>{strIngredient3}</li>
            <li style={{textAlign:"center"}}>{strIngredient4}</li>
         </ul>
        
         <div className="sle">
            <button className='inc' onClick = {handleincrement}>+</button>
            <p className='cont'>{count}</p>
            <button className='dec' onClick = {handledecrement}>-</button>
         </div>
          
          <div className='ord'>
             <button className='ordina'>Ordina</button>
          </div>
        

      </div>
    </>
  )
}

export default Drink