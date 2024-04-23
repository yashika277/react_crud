import React, { useState } from 'react'

const Count = () => {
    const [data,setData]=useState(0);
  return (
    <>
    <div>{data}</div>
    <button onClick={()=>setData(data+1)}>submit</button>
    </>
  )
}

export default Count
