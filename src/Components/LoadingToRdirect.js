import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRdirect = () => {
const [count,setCount]=useState(2)

const navigate=useNavigate();

useEffect(() => {
    const interval=setInterval(() =>{
        setCount((currentCount) => --currentCount)
    },1000)

    count === 0 && navigate("/")
    return () => clearInterval(interval);

},[count,navigate])

  return (
    <div style={{ textAlign: "center" }}>
<div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>

    </div>
  )
}

export default LoadingToRdirect