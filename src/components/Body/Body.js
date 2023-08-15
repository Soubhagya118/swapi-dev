import React from 'react'

const Body = ({showData , removeFn}) => {
    console.log("sD",showData)
  return (
    <div >
    <ul>
    {showData.map((e)=><li key={e.id} style={{listStyle:'none',width:'100%',textAlign:'center'}}>
<h3>{e.title}</h3>
<p style={{width:'100%',margin:0,justifyContent:'center'}}>{e.openingText}</p>
<button onClick={()=>{removeFn(e)}}>remove</button>
</li>)} 
    </ul>
  
    </div>
  )
}

export default Body
