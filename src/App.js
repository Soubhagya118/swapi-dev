import React, { useEffect, useState, useCallback,useRef } from 'react';
import { Button } from 'react-bootstrap';
import Body from './components/Body/Body';


const App = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);

const title=useRef();
const text=useRef();
const rDate= useRef();

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
const submitEvent=(e)=>{
e.preventDefault();
const t1=title.current.value;
const ot1 = text.current.value;
const r1=rDate.current.value;
setShowData((prvData)=>( [...prvData,{id:Math.random(),title:t1,openingText:ot1,releaseDate:r1}])
)
  
}

  return (
    <>
    <section style={{width:'500px',margin:'auto',marginTop:'20px',border:'1px solid black',padding:'20px'}}>
<form onSubmit={submitEvent} style={{display:'grid'}}>
<label htmlFor='title'>Title </label>
      <input id='title' ref={title}/>
<br/>
      <label htmlFor='openingText'>Opening Text</label>
      <input id='openingText' ref={text} />
<br/>
      <label htmlFor='rleasedate'>Release Date</label>
      <input id='rleasedate' ref={rDate}/>
        
      <br/>
      <button style={{width:'30%',marginLeft:'35%'}}>Add Movie</button>
</form>
     
    </section>


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
