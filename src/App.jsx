import React, { useEffect, useState } from 'react'


function App() {
    const[currencies, setCurrencies] = useState([])


    useEffect(()=>{
      fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((response)=>response.json())
      .then((data)=>{
        setCurrencies(data)
      })
    
    }, [])
    

  return (
    <>
      <div className='w-screen h-screen bg-[url(https://cdn.pixabay.com/photo/2023/03/13/16/10/banknotes-7850299_1280.jpg)] bg-no-repeat bg-cover flex justify-center items-center'>

      <div className='w-96 h-32  bg-blue-700 flex p-4 item-center'>
            <select className='bg-white'>
              {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}
            </select>  

            
      </div>
      <h1>TO</h1>
      <div className='w-96 h-32  bg-blue-700 flex p-4 item-center'>
            <select className='bg-white'>
              {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}
            </select>  

            
      </div> 
      </div>
    </>
  )
}

export default App