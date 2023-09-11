import React from 'react'
import landingvis from '@/public/landingvis.jpg'
import Image from 'next/image'
import styles from '@/styles/visuallanding.module.css';
import Link from 'next/link';
import Head from 'next/head';


const VisualLandingPage = () => {
  
  return (

    <div className={styles.main}>
    
      <div className={styles.leftside}>
        <h1>Adventures and Exploration Guide</h1>
        <p>Welcome to the ultimate online destination<br/>
         for nature enthusiasts and adventure seekers! </p>
<Link href='/signup' className={styles.getstartedbtn}
>Get Started</Link>
</div>
<div className={styles.rightside}>
        <Image  src={landingvis} className={styles.mainimg}/>
        </div>
        
        </div>
   
  )
}

export default VisualLandingPage;