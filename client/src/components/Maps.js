import React from 'react'

function Maps() {
  return (
    
    <div className= 'container' id='maps' style={{marginTop: '10vh'}}>
      <h1 style={{fontFamily: 'Sacramento', color: '#556052', marginBottom: '2vh'}}><u><b>Maps</b></u></h1>
        <div
        style={{
          marginTop: '5%',
          overflow: 'hidden',
          paddingBottom:'56.25%',
          position:'relative',
          height:0,
          marginBottom: '5%',
          border: '3vh solid #7C9473',
        }}
        >
      <iframe title="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2911722432111!2d124.8329454351957!3d1.426189635213654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287736d75f12bfd%3A0xfd31c1c623aa3398!2sJl.%20Walana%2C%20Kec.%20Pineleng%2C%20Kabupaten%20Minahasa%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1624114969353!5m2!1sid!2sid" frameborder="0" width="400" height="300" 
      style={{
        border: 0, 
        allowfullscreen:"", 
        loading:"lazy", 
        left:0,
        top:0,
        height:'100%',
        width:'100%',
        position:'absolute'
    }}></iframe>

      </div>
    </div>
  )
}

export default Maps