import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function Announcement () {
  const history = useHistory()
  const location = useLocation()

  function goToHome (event) {
    history.push('/home/')
  }

  function getName (val) {
    const [_, name] = val.split('=');
    return name;
  }

  console.log(location.search);

  return (
    <div
      style={{
        backgroundColor: '#E8EAE6',
        width: '80%',
        border: '5px solid #7C9473',
        padding: '7%',
        marginLeft: '10%',
        marginBottom: '5%',
        marginTop: '5%'
      }}
    >
      <div>

        <h1 style={{fontFamily: 'Sacramento', color: '#798777'}}> ❤ </h1>
        <h1 style={{fontFamily: 'Sacramento', color: '#798777'}}> <b> Dio & Clara </b> </h1>

        <p style={{fontFamily: 'Quicksand', color: '#798777', textAlign: "left", fontSize:'1.7vh', marginTop:'5vh'}}>
        
        Dear <b>{getName(location.search)}</b>, 

        <br></br>

        Demi mengurangi penyebaran virus Covid-19, maka dihimbau untuk selalu mengikut protokol kesehatan sebagai berikut:
        <br /> <br />
        1. Selalu menggunakan masker jika tidak sedang makan atau minum <br />
        2. Mencuci tangan sebelum memasuki area acara pemberkatan/resepsi <br />
        3. Menjaga jarak satu dengan yang lain<br />
        4. Tidak berjabat tangan <br />
        5. Disarankan membawa handsanitizer <br />
        6. Jika sedang tidak enak badan, mohon untuk tetap beristirahat di Rumah<br /><br />

        Semoga kita semua senantiasa diberi kesehatan dan pandemi Covid-19 cepat berakhir. Terima kasih.. <br /> <br />

        Dio dan Clara
        </p>
      </div>
      <div>
        <iframe width="100%" height="280" src="https://www.youtube.com/embed/INzgLtAulUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <button className='btn' style={{backgroundColor: '#798777', color:'#E8EAE6', marginTop: '10%'}}
        onClick={(event) => goToHome()}
      > OPEN INVITATION </button>
    </div>
  )
}

export default Announcement