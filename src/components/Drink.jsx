import React, { useState } from 'react'
import './Drink.css'

function Drink({strDrinkThumb,strDrink,strAlcoholic,strCategory,strGlass,strIngredient1,strIngredient2,strIngredient3,strIngredient4}) {

    const [count,setCount] = useState(0);
    const [message,setMessage] = useState("");
    const [messagemax,setMessagemax] = useState("");
    const max = 5;

    const handleincrement = () => {

        if(count < max) {

           setCount( count + 1 );

        } else {

           setCount(max);
           setMessagemax("Hai raggiunto il max");
           setTimeout( () => setMessagemax(""), 3000);
        }
    }

    
    const handledecrement = () => {

      if(count > 0) {

         setCount( count - 1 );

      } else {

         setCount(0);
      }
  }

  const handleordina = () => {

      if(count === 0) {

         setMessage("*Devi inserire un' ordine")
         setTimeout( () => setMessage(""),3000);

      } else {

         setMessage("Ordine aggiunto");
         setTimeout( () => setMessage(""),3000);
      }

      
  } 

  return (
    <>
      <div className="card">
         <img src={strDrinkThumb} alt={strDrink} width="300px" height="300px"/>
         <h3 className='text-center text-success fw-bolder'>{strDrink}</h3>
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

           <p className="text-center text-danger fw-bolder">{messagemax}</p>

          <div className='ord'>
             <button onClick={handleordina} className='ordina btn btn-primary fs-3 p-2'>Ordina</button>
             <p className="text-center text-danger fw-bolder">{message}</p>
          </div>
        

      </div>
    </>
  )
}

export default Drink