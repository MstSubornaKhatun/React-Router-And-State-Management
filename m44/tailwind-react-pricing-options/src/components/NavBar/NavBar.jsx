import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = 
                navigationData.map((route, index)=> <Link key={index} route={route}></Link>)
            
    return (
        <nav className='flex justify-between mx-10'>
          <span className='flex' onClick={() => setOpen(!open)}>
            {
              open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
            }
              <ul className={`md:hidden absolute duration-1000 text-black
                    ${open ? 'top-8' : '-top-40'}
                    bg-amber-200`}>
                {links}
            </ul>
            
 <h3 className='ml-4'>My Navbar</h3>
          </span>
         
          
            <ul className='md:flex hidden'>
                {links}
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;