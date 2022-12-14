import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {  useState } from 'react'
import Loader from 'react-loaders'

import { Link } from 'react-router-dom'
const Skills = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                '&',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Work in front-end development including technogies like{' '}
            <span className="highlight">HTML5</span>,{' '}
            <span className="highlight">CSS3</span>,{' '}
            <span className="highlight">JavaScript</span>,{' '}
            <span className="highlight">JQuery</span>,{' '}
            <span className="highlight">ReactJS</span>,{' '}
            <span className="highlight">BootStrap</span>,{' '}
            <span className="highlight">Sass</span>,{' '}
            <span className="highlight">Git</span>, etc.
          </p>
          <p>
            I'm a designer and I have a good sense of aesthetics and experience
            in responsice, mobile-first web design. I put special effort into
            optimizing my code and providing the best user experience. I would
            love t give you any kind of support also after the project's
            completion. I guarantee a commitment during work on your project.
          </p>
          <p>
            Visit my{' '}
            <a
              href="https://www.linkedin.com/in/sidhanthkundu"
              className="link"
            >
              {' '}
              LinkedIn
            </a>{' '}
            profile for more details. Also you can checkout my cv on this{' '}
            <a
              href="https://drive.google.com/file/d/1jvPpU0t65HHOKiIBLQ2H2zFsLFDtsga4/view?usp=sharing"
              target="_blank"
              className="link"
            >
              link
            </a>
            , or feel free to{' '}
            <Link to="/contact" className="link">
              {' '}
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
