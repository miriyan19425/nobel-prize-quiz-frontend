import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className='navigation'>
        <li><NavLink to='/' className='navig'>Home</NavLink></li>
		    <li><NavLink to='/physics' className='navig'>Physics</NavLink></li>
		    <li><NavLink to='/chemistry' className='navig'>Chemistry</NavLink></li>
        <li><NavLink to='/medicine' className='navig'>Medicine</NavLink></li>
        <li><NavLink to='/literature' className='navig'>Literature</NavLink></li>
        <li><NavLink to='/peace' className='navig'>Peace</NavLink></li>
        <li><NavLink to='/economics' className='navig'>Economics</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
