import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import Body from './components/Body/Body';


const App = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);




 const apirequest = useCallback( async ()=>{
  setIsLoading(true);
  setError(null)
  try{
  const response = await fetch('https://swapi.dev/api/films/');
    if( !response.ok ){
      throw new Error('....Retrying');
    };
    const data = await response.json();  
    const filmsList=data.results.map((d)=>{
      return {
        id:d.episode_id,
        title:d.title,
        openingText:d.opening_crawl,
        releaseDate:d.release_date,
      }
    });

    
  
    setShowData(filmsList);
    setError(null)
  
  }catch(err){
      setError(err.message)
  }
  setIsLoading(false);


},[]
);


useEffect(()=>{

  apirequest();

},[apirequest]);
 

let content = <p>Found No Films</p>
if(showData.length>0){
content = <Body showData={showData}/>

}
if(error){
  content=<h2>{error}</h2>
}
if(isLoading){
   content=<h2>Loading.........</h2>
}


  return (
    <>
    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',}}>

<section>

<button onClick={apirequest} style={{marginBottom:'10px'}}>Fetch Films</button>

</section>
<section>
  {content}
</section>
    </div>
     
    </div>
    </>
  )
}

export default App
