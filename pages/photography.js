import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Cards from '@/components/Cards';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { photographyCourses } from '@/components/CourseComponents/photographyCourses';
import Image from 'next/image';
import photographyvisual from '@/public/photographyvisual.jpg'
import Head from 'next/head';


const Photography = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Head><title>Wildlife Photography</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
      {selectedItem ==='Courses' && <Courses courses={photographyCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={photographyvisual}/>
      <Sidebar/>
      </div>

    </div>
  )
}

export default Photography;