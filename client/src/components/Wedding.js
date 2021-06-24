import React from 'react'

import dio from '../assets/RJ770006a.jpeg'
import lala from '../assets/RJ770042a.jpeg'

function Wedding() {
  return (
    <div className='container' id='wedding' style={{padding:'10vh', backgroundColor: '#E8EAE6 ', opacity: '0.80'}}>
      <h1 style={{fontFamily: 'Sacramento', color: '#556052', fontSize: '7vh'}}><u><b>Wedding</b></u></h1>
      <div className='row'>
        <div className='col-6' style={{marginTop: '5%'}}>
          <img className="rounded-circle img-fluid" alt='lala-dio' src={dio} style={{width: '65%', marginLeft: 0}}/>
        </div>
        <div className='col-6' style={{marginTop: '5%'}}>
          <h2 style={{fontFamily: 'Sacramento', color: '#556052', fontSize: '5vh'}}> <b>dr. Dio Kusbandiar Prijadi </b></h2>
        </div>
        <div className='col-6' style={{marginTop: '5%', marginLeft:'25%'}}>
          <h2 style={{fontFamily: 'Sacramento', color: '#556052', fontSize:'7vh'}}> <b>&</b></h2>
        </div>
        <div className='col-6' style={{marginTop: '5%'}}>
          <h2 style={{fontFamily: 'Sacramento', color: '#556052', fontSize: '5vh'}} ><b>dr. Clara Cecilia Pongantung </b></h2>
        </div>
        <div className='col-6'>
          <img className="rounded-circle img-fluid" alt='lala-dio' src={lala} style={{width: '65%', marginLeft: 0}}/>
        </div>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Wedding