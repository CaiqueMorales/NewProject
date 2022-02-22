import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export function NavBar () {

    const [click, setClick] = useState(false)

    const handleClick = (() => setClick(!click))

    const setClickFalse = (() => setClick(false))

    return(

        <>
        
            <header id="header" className="header container">
                <nav className="nav ">
                    <Link to="/" className='nav-logo'>Logo</Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li onClick={setClickFalse} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li onClick={setClickFalse} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li onClick={setClickFalse} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li onClick={setClickFalse} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li onClick={setClickFalse} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    </ul>
                    <div onClick={handleClick} className="hamburger-button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </header>

        </>

    )

}