import React, { useEffect, useState } from 'react'

const Counter = () => {
    var [count,setCount]=useState(1)

    const decrement=()=>{
        // if(count>0){
            setCount(count-1)
        // }
    }

    const increment=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        if(count!==1){
            console.warn('count should be 1 to check for test cases run npm run test')
        }
    },[])

  return (
    <div className='col-4 mt-4 p-3 align-items-center fs-1 bg-light shadow rounded d-flex flex-row justify-content-around m-auto'>
        <button  onClick={decrement}>-</button>
        <h2 data-testid='counter'>{count}</h2>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter