import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown(){
    setDropdownOpen(prev => !prev);
 }

  return (
    <nav>
      <ul className='navbar'>
        <li><NavLink to='/' className='link' activeClassName="active">Home</NavLink></li>
        <li className="dropdown">
          <button type='button' onClick={toggleDropdown} className="button">Categories</button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to='/physics' activeClassName="active">Physics</NavLink></li>
              <li><NavLink to='/chemistry' activeClassName="active">Chemistry</NavLink></li>
              <li><NavLink to='/medicine' activeClassName="active">Medicine</NavLink></li>
              <li><NavLink to='/literature' activeClassName="active">Literature</NavLink></li>
              <li><NavLink to='/peace' activeClassName="active">Peace</NavLink></li>
              <li><NavLink to='/economics' activeClassName="active">Economics</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
