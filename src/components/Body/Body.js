import React from 'react'

const Body = ({showData , removeFn}) => {
  
  const bodyRemove=(id)=>{
    // const updated=showData.map((e)=>e.id!==ele.id);
    removeFn(id)

  }

    console.log("sD",showData)
  return (
    <div >
    <ul>
    {showData.map((ele)=><li key={ele.id} style={{listStyle:'none',width:'100%',textAlign:'center'}}>
<h3>{ele.title}</h3>
<p style={{width:'100%',margin:0,justifyContent:'center'}}>{ele.text}</p>
{console.log("eetest",ele)}
<button onClick={()=>bodyRemove(ele.id)}>remove</button>
</li>)} 
    </ul>
  
    </div>
  )
}

export default Body
