import React, { useState } from 'react'
import './Drink.css'

function Drink({strDrinkThumb,strDrink,strAlcoholic,strCategory,strGlass,strIngredient1,strIngredient2,strIngredient3,strIngredient4}) {

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
         <h3 className='text-center'>{strDrink}</h3>
         <p  className='text-center'>Graduation: {strAlcoholic}</p>
         <p  className='text-center'>Category: {strCategory}</p>
         <p  className='text-center'>Glass: {strGlass}</p>
         <p  className='text-center'>Ingredients:</p>
         <ul>
            <li className='text-center'>{strIngredient1}</li>
            <li className='text-center'>{strIngredient2}</li>
            <li className='text-center'>{strIngredient3}</li>
            <li className='text-center'>{strIngredient4}</li>
         </ul>
        
         <div className="sle">
            <button className='inc btn btn-primary fs-4 rounded-circle' onClick = {handleincrement}>+</button>
            <p className='cont fs-1'>{count}</p>
            <button className='dec btn btn-primary fs-4 rounded-circle' onClick = {handledecrement}>-</button>
         </div>
          
          <div className='ord'>
             <button className='ordina btn btn-primary fs-3 p-2'>Ordina</button>
          </div>
        

      </div>
    </>
  )
}

export default Drink