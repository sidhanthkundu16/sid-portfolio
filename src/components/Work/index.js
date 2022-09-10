import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/Sign-up-Form.png'
import Pro2 from '../../assets/images/Expense-Tracker.png'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import { BiLinkExternal } from 'react-icons/bi'
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
        <div className="">
          <div className="card">
            <img className="imge" src={LogoS} />
            <a href="https://sidhanthkundu16.github.io/signin-signup/">
              <BiLinkExternal className="iconn" />
            </a>
          </div>
          <div className="card2">
            <img className="imge" src={Pro2} />
            <a href="https://sidhanthkundu16.github.io/Expense-Tracker/">
              <BiLinkExternal className="iconn" />
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
