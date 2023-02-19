
import React from 'react'
import { Link  } from 'react-router-dom';

function Descrizione() {
  return (
    <div>
           <h1 className='text-center text-danger fw-bolder'>Cocktails</h1>
           <h2 className='text-center text-dark fw-bolder'>Descrizione</h2>


           <div className='col text-center mt-5'>

               <img src="https://c8.alamy.com/comp/HTFCJJ/martini-glass-with-red-cocktail-icon-icon-cartoon-HTFCJJ.jpg" className='text-center' alt="Cocktail" width='500px'height='500px'/>

           </div>

           <p className='text-center mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia soluta adipisci libero nemo pariatur fugit, delectus eos consequuntur, accusamus voluptas debitis assumenda doloribus amet voluptatem magni explicabo. Quidem, sed. Et!</p>
           <p className='text-center'><Link style={{textDecoration:'none',fontSize:'20px',color:'blue'}} to='/'>Home</Link></p>
           

    </div>
  )
}

export default Descrizione