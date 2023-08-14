import React from 'react'

const Body = ({showData}) => {
    console.log("sD",showData)
  return (
    <div >
    <ul>
    {showData.map((e)=><li key={e.id} style={{listStyle:'none'}}>
<h3>{e.title}</h3>
<p>{e.openingText}</p>
</li>)} 
    </ul>
  
    </div>
  )
}

export default Body
