import { useState } from "react";
import { NavLink } from "react-router-dom";

const categories = ['physics', 'chemistry', 'medicine', 'literature', 'peace', 'economics'];

function Header(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown(){
        setDropdownOpen(prev => !prev);
    }

    return (
        <header>
            <nav>
                <ul className='ul-home-create'>
                    <li><NavLink to='/' className='link-home-create'>HOME</NavLink></li>
                    <li><NavLink to='/' className='link-home-create'>CREATE QUERY</NavLink></li>
                </ul>
            </nav>
            <section>
                    <button type='button' onClick={toggleDropdown} className='button-categories'>CATEGORIES</button>
                {dropdownOpen &&
                    <nav>
                        <ul className='ul-categories'>
                            {categories.map((cat, i) => <li key={i} className='li-categories'>
                                <NavLink to={`/${cat}`} className='link-categories'>{cat.toUpperCase()}</NavLink></li>)}    
                        </ul>  
                    </nav>
                }    
            </section>    
        </header>
    );	
}

export default Header;
