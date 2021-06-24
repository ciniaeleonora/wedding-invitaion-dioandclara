import React from 'react'

function Invitaion() {
  return (
    <div className= 'container' id='invitation' style={{marginTop: '10vh'}}>
    <h1 style={{fontFamily: 'Sacramento', color: '#556052', marginBottom: '2vh', fontSize: '7vh'}}><u><b>Invitation</b></u></h1>
      <div className='card p-4' style={{marginBottom:'10vh', backgroundColor: '#E8EAE6'}}>
        <h1 style={{fontFamily: 'Quicksand', color: '#556052'}}>
            <div>Save The Date</div>
        </h1>
        <h1 style={{fontFamily: 'Quicksand', color: '#556052'}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
        </h1>
        <h4 style={{fontFamily: 'Quicksand', color: '#556052'}}>
            <b style={{animationDuration: '8s', animationName: 'slidein', animationIterationCount: 'infinite'}}>Sabtu, 26 Juni 2021</b>
        </h4>
        <p style={{fontFamily: 'Quicksand', color: '#556052', fontSize: '2vh'}}>
          Dengan tidak mengurangi rasa hormat, dalam rangka menaati protokol kesehatan maka resepsi akan dibagi menjadi 2 sesi.
        </p>
        <div className='row' style={{paddingTop: '5vh'}}>
          <div className='col-6 mt-10'>
            <h4 className='mt-10' style={{fontFamily: 'Quicksand', color: '#556052'}}><u>Pemberkatan Nikah</u></h4>
            <h1 style={{fontFamily: 'Sacramento', color: '#556052'}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
            </h1>
            <h6 style={{fontFamily: 'Quicksand', color: '#556052'}}> 14.00 WITA</h6>
            <h1 style={{fontFamily: 'Sacramento', color: '#556052'}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
              </svg>
            </h1>
            <p style={{fontFamily: 'Quicksand', color: '#556052'}}>Gereja Katolik St. Fransiskus Xaverius Pineleng</p>
            <a href="https://calendar.google.com/calendar/r/eventedit?text=Dio+%26+Clara+Wedding+&amp;dates=20210626T140000/20210626T150000&amp;ctz=Asia/Singapore&amp;details=We+would+be+more+than+happy+to+see+Your+bright+faces+in+our+wedding&amp;pli=1&amp;uid=1521339627addtocalendar&amp;sf=true&amp;output=xml" style={{color: '#556052'}}>
              <button className = 'btn btn-save' style={{backgroundColor: '#556052', color:'#ffeedb'}}>Save the date !</button>
            </a>
          </div>
          <div className='col-6 mt-10'>
            <h4 className='mt-10' style={{fontFamily: 'Quicksand', color: '#556052'}}><u>Resepsi Pernikahan</u></h4>
            <h1 style={{fontFamily: 'Sacramento', color: '#556052'}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
            </h1>
            <h6 className= 'mt-2' style={{fontFamily: 'Quicksand', color: '#556052'}}> Sesi 1: 16.00 s/d 18.00 WITA</h6>
            <h6 style={{fontFamily: 'Quicksand', color: '#556052'}}> Sesi 1: 18.00 WITA s/d selesai</h6>

            <h1 style={{fontFamily: 'Sacramento', color: '#556052'}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
              <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
            </svg>
            </h1>
            <p style={{fontFamily: 'Quicksand', color: '#556052'}}>Kediaman Kel. Pongantung-Randang, Jln. Walana, Pineleng 1 Jaga 5</p>
            <a href="https://calendar.google.com/calendar/r/eventedit?text=Dio+%26+Clara+Wedding+&amp;dates=20210626T160000/20210626T200000&amp;ctz=Asia/Singapore&amp;details=We+would+be+more+than+happy+to+see+Your+bright+faces+in+our+wedding&amp;pli=1&amp;uid=1521339627addtocalendar&amp;sf=true&amp;output=xml" style={{color: '#556052'}}>
              <button className = 'btn btn-save' style={{backgroundColor: '#556052', color:'#ffeedb'}}>Save the date !</button>
            </a>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Invitaion