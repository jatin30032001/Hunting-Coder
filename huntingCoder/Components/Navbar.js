import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
const Navbar = () => {
  return (
    
         <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
           <Link  href='/about'><li>About</li></Link>
           <Link  href='/Blog'><li>Blog</li></Link>
           <Link  href='/Contact'><li>Contact</li></Link>
        </ul>
      </nav>
   
  )
}

export default Navbar
