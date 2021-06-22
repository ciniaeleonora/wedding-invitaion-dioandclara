  import React, { useEffect, useState } from 'react'
  import Comments from './Comments'

  function Congratulations() {
    let [comments, setComments] = useState([])
    let [newComment, setNewComment] = useState({
      name: '',
      message: ''
    })

    useEffect(() => {
      fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => setComments(data))
    })

    function addComment(event){
      event.preventDefault()
      fetch('http://localhost:3000', {  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
      })
        .then(res => res.json())
        .then(post => console.log(post))
        .catch(err => console.log(err))
    }
    
    return (
      <div className= 'container' id='congratulations' style={{marginTop: '10vh'}}>
        <h1 style={{fontFamily: 'Sacramento', color: '#556052', marginBottom: '5vh'}}><u><b>Congratulations</b></u></h1>
        <form className='container col-8' onSubmit={addComment}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: '#556052'}}>Name</label>
            <input type="text" className="form-control" id="name"
              onChange={(event) => setNewComment({...newComment, name: event.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: '#556052'}}>Messages</label>
            <textarea className="form-control" id="wish" rows="3"
              onChange={(event) => setNewComment({...newComment, message: event.target.value})}
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn mb-3" style={{backgroundColor: '#556052', color:'#ffeedb'}}> Send</button>
          </div>
        </form>

        <div className='rounded-3 container col-9' style={{backgroundColor: '#CFDAC8'}}>
          <div style={{fontFamily: 'Quicksand', color: '#556052', marginTop:'2vh'}}>
            {
              comments.map(comment => <Comments comment={comment} key={comment.id} />)
            }
            
          </div>
        </div>
      </div> 
    )
  }

  export default Congratulations