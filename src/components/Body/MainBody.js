import React, { useEffect, useState, useCallback} from 'react';
//  import {  collection, addDoc, getDocs, deleteDoc ,doc} from 'firebase/firestore/lite';
//import db from '../firebaseConfig/StartFireBase';

import Form from './Form';
import { Route } from 'react-router-dom';
import Body from './Body';



const MainBody = () => {
const [showData, setShowData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);

 const apirequest = useCallback(async ()=>{
  setIsLoading(true);
  setError(null)
  try{
  
    const res= await fetch('https://crud-project-3283c-default-rtdb.firebaseio.com/products.json');
   if(!res.ok){
    throw new Error(".....error occure in get ")
   }
  const data = await res.json();
  const fetchedItems =[];
  for(let key in data){
    fetchedItems.push({
      id:key,
      text:data[key].text,
      title:data[key].title,
      rDate:data[key].rDate
    })
  }
    setShowData(fetchedItems);
    setError(null)
  
  }catch(err){
      setError(err.message)
  }
  setIsLoading(false);


},[]
 );
// ======================= form handler function post api ==========================

async function AddProduct(showData){
  try{
const res= await fetch('https://crud-project-3283c-default-rtdb.firebaseio.com/products.json',{
  method:'POST',
  body:JSON.stringify(showData)
});

if(!res.ok){
  throw new Error('.....error')
}

const data = await res.json();
apirequest()

console.log("hello moto data",data);
  }catch(err){
    setError(err.message);
  }
}


  
    
// ======================================= remove function ==============

  async function removeFn(id){
    try{
      const res= await fetch(`https://crud-project-3283c-default-rtdb.firebaseio.com/products/${id}.json`,{
        method:'DELETE'
      })
         apirequest()

    }catch(err){
      console.log("err",err)
    }
  };
    

  //====================================== USEEFFECT ========================
  useEffect(()=>{
  
    apirequest();
  
  }, [apirequest]);
  
 
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
      <Form submitEvent={AddProduct} />


    <div className='container'>
    <div style={{width:'60%',margin:'10px auto',textAlign:'center',border:'1px solid black'}}>

    <section>
    <button onClick={apirequest} style={{marginBottom:'10px',marginLeft:'25px',marginTop:'10px'}}>Fetch Films</button>
    </section>
    <section>
      {content}
    </section>
    </div>
    </div>
    </section>

    </>
  )
}

export default MainBody;
