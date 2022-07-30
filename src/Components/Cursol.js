import React,{useState} from 'react'
import chevRight from './../Assets/chevron_right.png'
import chevLeft from './../Assets/chevron_left.png'
import ImgContainer from './ImgContainer'
import {bgList} from '../Helpers/BgList'

function Cursol() {

    const [counter,setCounter] = useState(0)
    
    const chevLelfHandler = () =>{
        counter === 0 && setCounter(bgList.length)
        setCounter(prev => prev - 1 )
    }

    const chevRightHandler = () => {
        counter >= bgList.length-1 && setCounter(-1)
        setCounter(prev => prev + 1 )
    }


  return (
    <>
        <div className='cursol to-left'
            onClick={chevLelfHandler}
        >
            <img src={chevLeft} alt='chevLeft'/>
        </div>
        <ImgContainer bgsList={bgList} counter={counter} />
        <div className='cursol to-right'
            onClick={chevRightHandler}
        >
            <img src={chevRight} alt='chevRight' />
        </div>
    </>
  )
}

export default Cursol