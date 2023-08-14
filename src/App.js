import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const App = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);

async function apirequest(){
  setIsLoading(true)
  
  const res= await fetch("https://swapi.dev/api/films/")
  const data = await res.json();  
  setIsLoading(false)

  setShowData(data.results);

};
{console.log('data',showData)}

  return (
    <>
    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',}}>

    <Button variant='primary' onClick={apirequest} style={{marginBottom:'10px'}}>Fetch Films</Button>

    {isLoading && <h3>Loading...........</h3>}
      { showData?.map((e)=>
      <div  key={e.episode_id}>
      <h4>{e.title}</h4>
      <p>{e.opening_crawl}</p>
      </div>)}
    </div>
     
    </div>
    </>
  )
}

export default App
