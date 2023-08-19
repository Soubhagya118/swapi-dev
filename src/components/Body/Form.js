import React,{useRef} from 'react'

const Form = (props) => {

const text = useRef();
const title = useRef();
const rDate = useRef();

const handSubmitleEvent =(e)=>{
  e.preventDefault();
  const title1= title.current.value;
  const text1= text.current.value;
  const rDate1 = rDate.current.value;
  const movie={
    title:title1,
    text:text1,
    rDate:rDate1
  }
  
  props.submitEvent(movie);

} 


  return (
    <section style={{width:'50%',margin:'auto',marginTop:'20px',border:'1px solid black',padding:'20px'}}>
    <form onSubmit={handSubmitleEvent} style={{display:'grid'}}>
    <label htmlFor='title'>Title </label>
    <input id='title' ref={title} style={{borderRadius:'5px'}}/>
    <br/>
    <label htmlFor='openingText'>Opening Text</label>
    <input id='openingText' ref={text} style={{height:'100px',borderRadius:'5px'}} />
    <br/>
    <label htmlFor='rleasedate'>Release Date</label>
    <input id='rleasedate' ref={rDate} style={{borderRadius:'5px'}} />
      
    <br/>
    <button style={{width:'150px',margin:'auto'}}>Add Movie</button>
  </form>
   
  </section>
  )
}

export default Form
