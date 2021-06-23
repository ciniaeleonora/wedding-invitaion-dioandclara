import React from 'react'
import RJ770199 from '../assets/RJ770199a.jpg'
import RJ788460 from '../assets/RJ788460a.jpg'
import RJ788380 from '../assets/RJ788380a.jpg'
import RJ788410 from '../assets/RJ788410a.jpg'
import RJ788621 from '../assets/RJ788621a.jpg'
import RJ788917 from '../assets/RJ788917a.jpg'
import RJ770532 from '../assets/RJ770532a.jpg'
import DSC_5975 from '../assets/DSC_5975 ed.jpg'
import DSC_5665 from '../assets/DSC_5665 ed.jpg'
import DSC_5398 from '../assets/DSC_5398 ed.jpg'
import DSC_5470 from '../assets/DSC_5470 ed.jpg'
import DSC_6088 from '../assets/DSC_6088 ed.jpg'
import DSC_6749 from '../assets/DSC_6749 ed.jpg'
import DSC_6830 from '../assets/DSC_6830 ed.jpg'
import DSC_5182 from '../assets/DSC_5182 ed.jpg'
import DSC_5073 from '../assets/DSC_5073 ed.jpg'
import RJ788507 from '../assets/RJ788507.jpg'
import RJ788803 from '../assets/RJ788803.jpg'
import RJ770441 from '../assets/RJ770441.jpg'




function Gallery() {
  return (
    <div className='container' id='gallery'>
      <h1 style={{fontFamily: 'Sacramento', color: '#556052'}}><u><b>Gallery</b></u></h1>
      <div className = 'row' style={{display: "inline-block"}}>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ770199} style={{width: '50%', marginBottom: '2vh', visibility: 'visible', }}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788460} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788380} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788410} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788621} style={{width: '100%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788917} style={{width:'33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ770532} style={{width:'33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788803} style={{width:'33%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ770441} style={{width:'50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5398} style={{width: '25%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5470} style={{width: '25%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_6749} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_6830} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_6088} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5975} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5665} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={RJ788507} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5073} style={{width: '50%', marginBottom: '2vh'}}/>
        <img className="img-fluid rounded-3" alt='lala-dio' src={DSC_5182} style={{width: '50%', marginBottom: '2vh'}}/>
      </div>
    </div>
  )
}

export default Gallery