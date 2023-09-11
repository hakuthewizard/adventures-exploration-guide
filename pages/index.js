import React from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";
import VisualLandingPage from '@/components/VisualLandingPage';
import styles from '@/styles/main.module.css'
import Footer from '@/components/Footer';
import Head from 'next/head';

const Home = () => {
  return (
    
    <div className={styles.mainContainer}>
      
     
<Head>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<title>Adventures and Exploration Guide</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <VisualLandingPage/>
      
      <Sidebar/>

      </div>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home;