import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <ul className='navigator'>
          <span className='brand-container'><h1 className='brand-name '><Link to='/'>NewsToday</Link></h1></span>
          <div className='news-links'> 
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/us'>US News</Link></li>
            <li><Link to='world'>World News</Link></li>
            <li><Link to='sport'>Sports News</Link></li>
          </div>
        </ul>
    </div>
  )
}

export default Header