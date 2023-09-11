import React from 'react'
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import logo from '@/public/logo.png'
import Image from 'next/image';

const Navbar = () => {


  return (
    <div className={styles.navbar}>
        <Link className={styles.heading} href='/'><Image className={styles.logo}src={logo}/><h1>Adventures and Exploration Guide</h1>
      
        </Link>
  
          <div className={styles.navbarButtons}>
        <Link href="/login" className={styles.loginBtn}>Login</Link>
        <Link href="/signup"  className={styles.signupBtn}>Signup</Link >
        </div>
    
    </div>
  )
}

export default Navbar;