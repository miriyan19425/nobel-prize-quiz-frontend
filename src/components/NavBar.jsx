import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown(){
    setDropdownOpen(prev => !prev);
 }
  
  return (
    <nav className='navbar'>
      <section className='home'>
        <NavLink to='/' className='home-link'>Home</NavLink>
        <NavLink to='/' className='new-query-form-link'>New Query</NavLink>
      </section>
      <section>
          <button type='button' onClick={toggleDropdown} className="categories-button">Categories</button>
          {dropdownOpen && (
          <ul className='dropdown'>
            <li className='dropdown-item'><NavLink to='/physics' className='physics-link'>Physics</NavLink></li>
            <li className='dropdown-item'><NavLink to='/chemistry' className='chemistry-link'>Chemistry</NavLink></li>
            <li className='dropdown-item'><NavLink to='/medicine' className='medicine-link'>Medicine</NavLink></li>
            <li className='dropdown-item'><NavLink to='/literature' className='literature-link'>Literature</NavLink></li>
            <li className='dropdown-item'><NavLink to='/peace' className='peace-link'>Peace</NavLink></li>
            <li className='dropdown-item'><NavLink to='/economics' className='economics-link'>Economics</NavLink></li>
          </ul>
          )}
      </section>
       
      
    </nav>
  );
}

export default NavBar;
