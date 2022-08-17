import { HomeOutlined , UserOutlined,SettingOutlined } from '@ant-design/icons'
import {
  EnvelopeOpen,
  Eye,
  Linkedin,
  Github,
  List,
  Instagram
} from 'react-bootstrap-icons'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { useState } from 'react'

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>

        <nav className={showMediaIcons ? 'nav mobile-nav' : 'nav'}>
          <NavLink exact="true" activeclassname="active" to="/">
            <HomeOutlined />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <UserOutlined />
          </NavLink>
          
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <SettingOutlined />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <EnvelopeOpen />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="work-link"
            to="/work"
          >
            <Eye />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sidhanthkundu"
            >
              <Linkedin />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sidhanthkundu16"
            >
              <Github />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="sidhanthkundu16@gmail.com"
            >
              <EnvelopeOpen />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sidhanth_kundu_/"
            >
              <Instagram />
            </a>
          </li>
        </ul>

        <a
          className="mobile-link"
          href="#"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <List />
        </a>
      </div>
    </>
  )
}

export default Sidebar
