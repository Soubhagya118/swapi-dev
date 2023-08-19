import React from 'react'
import MainBody from './components/Body/MainBody'
import { Routes,Route,Link } from 'react-router-dom'
import About from './components/Body/About'

const App = () => {
  return (
    <div style={{width:'100%'}}>
       <header style={{width:'100%', height:'auto',background:'black',color:'white',position:'sticky',marginTop:'0'}}>
        <ul style={{width:'200px',margin:'auto',listStyle:'none',display:'flex',gap:'20%',padding:'10px'}}>
        
        <li > <Link to='/' style={{color:'white',textDecoration:'none'}}> Home</Link> </li>
        <li > <Link to='/about' style={{color:'white',textDecoration:'none'}}> About</Link> </li>
        </ul>
      </header>
      <section>
     
    <Routes>
    <Route path="/" element={<MainBody/>} />
    <Route path="/about" element={<About/>} />
        
     
    </Routes>
    
      
     
      
      
        
      </section>
      
    </div>
  )
}

export default App
