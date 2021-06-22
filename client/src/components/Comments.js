import React from 'react'

function Comments({comment}) {

  return (
    <div>
      <h3 className='p-2'><b>{comment.name}</b></h3>
      <p>{comment.message}</p>
      <hr></hr>
    </div>

  )
}

export default Comments