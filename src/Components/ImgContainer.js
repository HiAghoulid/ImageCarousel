import React from 'react'


function ImgContainer({bgsList,counter}) {

  return (
    <div className='image-container'>
      <img alt='image' src={bgsList[counter].src} />
    </div>
  )
}

export default ImgContainer