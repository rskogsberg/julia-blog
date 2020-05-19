import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Login',
    path: '/login'
  },
  {
    title: 'Blog',
    path: '/blog'
  }

]

export default function Navigation ({ user }) {

  const [menuActive, setMenuActive] = useState(false)

  return (
  <nav className="site-navigation">
    <span className='menu-title'>Sausages and Sweatshops</span>
    <div className={`menu-content-container ${menuActive && 'active'}`}>
      <ul>
        { navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <span className='menu-avatar-container'>
        <FontAwesomeIcon icon="user" className='menu-avatar'/>
        <span className='menu-avatar-name'>{`${user.firstName} ${user.lastName}`}</span>
      </span>
    </div>
    <FontAwesomeIcon icon='bars' className='menu-icon' onClick={() => setMenuActive(!menuActive)}/>
  </nav>)
}