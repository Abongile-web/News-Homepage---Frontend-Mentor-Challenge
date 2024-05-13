import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='src\assets\images\logo.svg'></img>
        </div>

        <div className='navigation'>
            <ul>
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