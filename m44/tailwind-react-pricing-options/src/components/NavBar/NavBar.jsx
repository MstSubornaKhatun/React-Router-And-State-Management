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
  // state components er vitore declare korte hoi
  const [open, setOpen] = useState(false);

  const links =    
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                

    return (
        <nav className='flex justify-between mx-10'> 
        <span className='flex' onClick={() => setOpen(!open)}>
          { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
           <ul className='md:hidden'>
             {
              links
             }
            </ul>
        </span>
        
        <h3>My Navbar</h3>
            <ul className='md:flex hidden'>
             {
              links
             }
            </ul>

            <button>Sign In</button>



            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>           */}
        </nav>
    );
};

export default NavBar;