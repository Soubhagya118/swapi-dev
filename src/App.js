import React, { useState } from 'react';


const App = () => {
const [showData, setShowData] = useState([]);

function apirequest(e){
  e.preventDefault();
  
  fetch("https://swapi.dev/api/films/")
  .then((res)=>{
   // console.log("res",res.json())
  return res.json();

}).then((data)=>{
    const data1= data?.results;
  return setShowData(data1);

  }).catch((err)=>console.log(err))
};
{console.log('data',showData)}

  return (
    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',}}>

    <button onClick={apirequest}>Fetch Films</button>
      {showData?.map((e)=>
      <div  key={e.episode_id}>
      <h4>{e.title}</h4>
      <p>{e.opening_crawl}</p>
      </div>)}
    </div>
     
    </div>
  )
}

export default App
