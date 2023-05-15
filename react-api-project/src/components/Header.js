import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <ul className='navigator'>
          <span className='brand-name'><h1><Link to='/'>NewsToday</Link></h1></span>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/us'>US News</Link></li>
            <li><Link to='world'>World News</Link></li>
            <li><Link to='sport'>Sports News</Link></li>
        </ul>
    </div>
  )
}

export default Header