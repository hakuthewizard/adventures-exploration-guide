import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Cards from '@/components/Cards';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { craftsCourses } from '@/components/CourseComponents/craftsCourses';
import Image from 'next/image';
import craftsvisual from '@/public/craftsvisual.jpg'
import Head from 'next/head';


const Crafts = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
       <Head><title>Nature-Inspired Crafts</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
      {selectedItem ==='Courses' && <Courses courses={craftsCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={craftsvisual}/>
      <Sidebar/>
      </div>
   
    </div>
  )
}

export default Crafts