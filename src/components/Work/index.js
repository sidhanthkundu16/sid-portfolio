import './index.scss'
// import Project1img from '../../assets/images/Sign-up-Form.png'
import AnimatedLetters from '../AnimatedLetters'
import {  useState } from 'react'
import Loader from 'react-loaders'
const Work = () => {
  const [letterClass] = useState('text-animate')
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
            
            
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
