import React, { useEffect, useState, useCallback,useRef } from 'react';
import Form from './Form';
import { Route } from 'react-router-dom';
import Body from './Body';



const MainBody = () => {
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

}, [apirequest]);

const submitEvent=(e)=>{
  e.preventDefault();
  const t1=title.current.value;
  const ot1 = text.current.value;
  const r1=rDate.current.value;
  setShowData((prvData)=> [...prvData,{id:Math.random(),title:t1,openingText:ot1,releaseDate:r1}]);
  title.current.value='';
  text.current.value='';
  rDate.current.value='';
  
    
  }

  const removeFn=(ele)=>{
    const remove = showData.filter((e)=> e.id !==ele.id);
    setShowData(remove)

  }
 
let content = <p>Found No Movies...</p>
if(showData.length>0){
content = <Body style={{windth:'100%'}} removeFn={removeFn} showData={showData}/>

}
if(error){
  content=<h2>{error}</h2>
}
if(isLoading){
   content=<h2>Loading.........</h2>
}



  return (
    <>

    
     {/* / <Route path='/home'> */}
     
      <section>
      <Form submitEvent={submitEvent} text={text} rDate={rDate} title={title}/>


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
    </section>
    {/* </Route> */}
    </>
  )
}

export default MainBody;
