import React, { useRef, useState } from 'react'

const About = () => {
    const name=useRef();
    const email = useRef();
    const phone=useRef();
    const [userData,setUserData] = useState([]);

    const submitEvent=()=>{
        const name1=name.current.value;
        const email = email.current.value;
        const phone = phone.current.value;
    }
  return (
    <section style={{width:'500px',margin:'auto',marginTop:'20px',border:'1px solid black',padding:'20px'}}>
    <form onSubmit={submitEvent} style={{display:'grid'}}>
    <label htmlFor='name'>Name </label>
    <input id='name' ref={name}/>
    <br/>
    <label htmlFor='openingText'>Email Id</label>
    <input id='openingText' ref={email} />
    <br/>
    <label htmlFor='phoneNumber'>Phone Number</label>
    <input id='phoneNumber' ref={phone}/>
      
    <br/>
    <button style={{width:'30%',marginLeft:'35%'}}>Add Movie</button>
  </form>
   
  </section>
  )
}

export default About
