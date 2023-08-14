import React, { useState } from 'react';


const App = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);

async function apirequest(){
  setIsLoading(true)
  
  const res= await fetch("https://swapi.dev/api/films/")
  const data = await res.json();  
  setShowData(data.results);
  setIsLoading(false)

};
{console.log('data',showData)}

  return (
    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',}}>

    <button onClick={apirequest}>Fetch Films</button>

    {isLoading && <h3>Loading...........</h3>}
      { showData?.map((e)=>
      <div  key={e.episode_id}>
      <h4>{e.title}</h4>
      <p>{e.opening_crawl}</p>
      </div>)}
    </div>
     
    </div>
  )
}

export default App
