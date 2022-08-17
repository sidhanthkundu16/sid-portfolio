import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { GearWideConnected } from 'react-bootstrap-icons'
const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          {/* <p>
            
            View my projects here.
          </p> */}
          {/* <div className='construction'>

            <GearWideConnected className="icon" />
             {/* <h2>
                Under Construction
            </h2>  */}
          {/* </div> */} 
            <h2 className='coming-soon' >Coming soon...</h2>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
