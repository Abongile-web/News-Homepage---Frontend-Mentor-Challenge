import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='src\assets\images\logo.svg'></img>
        </div>

        <div className='navigation'>
        <svg onClick={toggleMenu} className='menu' width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            <ul className={`${open ? '' : 'responsive-menu'}`}>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar