import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const App = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);




async function apirequest(){
  try{
    setIsLoading(true)
  
    const response = await fetch("https://swapi.dev/api/films/");
    if( !response.ok ){
      throw new Error('....Retrying');
    };
    const data = await response.json();  
    
  
    setShowData(data.results);
    setError(null)
  
  }catch(err){
      setError(err.message)
  }
  setIsLoading(false);


};


  return (
    <>
    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',}}>

    <Button variant='primary' onClick={apirequest} style={{marginBottom:'10px'}}>Fetch Films</Button>

    {isLoading && <h3>Loading...........</h3>}
    { !isLoading && error && <p>{error}</p>}
      {!isLoading && showData.length>0 && showData?.map((e)=>
      <div key={e.episode_id}>
      <h4>{e.title}</h4>
      <p>{e.opening_crawl}</p>
      </div>)}
    </div>
     
    </div>
    </>
  )
}

export default App
