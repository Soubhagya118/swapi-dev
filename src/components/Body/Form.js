import React from 'react'

const Form = (props) => {
  return (
    <section style={{width:'500px',margin:'auto',marginTop:'20px',border:'1px solid black',padding:'20px'}}>
    <form onSubmit={props.submitEvent} style={{display:'grid'}}>
    <label htmlFor='title'>Title </label>
    <input id='title' ref={props.title}/>
    <br/>
    <label htmlFor='openingText'>Opening Text</label>
    <input id='openingText' ref={props.text} />
    <br/>
    <label htmlFor='rleasedate'>Release Date</label>
    <input id='rleasedate' ref={props.rDate}/>
      
    <br/>
    <button style={{width:'30%',marginLeft:'35%'}}>Add Movie</button>
  </form>
   
  </section>
  )
}

export default Form
