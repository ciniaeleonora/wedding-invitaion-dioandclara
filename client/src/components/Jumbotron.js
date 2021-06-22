import React from 'react'
import RJ770638 from '../assets/RJ770638.jpg'

function Jumbotron() {
  return (
    <div id="jumbotron" className="container" 
    style={{
      backgroundColor: '#E8EAE6 ',
      backgroundImage: `url(${RJ770638})`, 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition:'center', 
      opacity: '0.80',
      height: '100%'}}>
      <h1 className='rounded' style={{fontFamily:'Sacramento', height: '10vh', fontSize: '6vh', marginTop: '4vh', padding: '2vh', color: '#556052'}}><b>The wedding of Dio and Clara</b></h1>
      <div className='container mt-sm-5'>
        <br />
        <br />
        <br />
        <br />
        <p className="ms-lg-5 me-lg-5 rounded" style={{fontFamily: 'Sacramento', fontSize: '3vh', color: '#556052', marginTop:'37vh'}}> <b>"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." </b></p>
        <span className="rounded" style={{fontFamily: 'Sacramento', fontSize: '3vh', color: '#556052'}}> <b>Matius 19:6 </b></span>
      </div>
    </div>
  )
}

export default Jumbotron