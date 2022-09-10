import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import "./index.scss"
import {  useState } from 'react'
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import LogoS from '../../assets/images/logo-s.png'

const Home = () => {
  const [letterClass] = useState('text-animate')

  const nameArray = ["i", "d", "h", "a", "n", "t", "h"]

  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]



  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle}  alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />

          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / Javascript / Student</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="logo-container">
        <img className="solid-logo" src={LogoS} />
      </div>
      
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home;
