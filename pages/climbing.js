import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { climbingCourses } from '@/components/CourseComponents/climbingCourses';
import Image from 'next/image';
import climbingvisual from '@/public/climbingvisual.jpg'
import Head from 'next/head';

const Climbing = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
        <Head><title>Rock Climbing</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
      {selectedItem ==='Courses' && <Courses courses= {climbingCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={climbingvisual}/>
      <Sidebar/>
      </div>
    
    </div>
  )
}

export default Climbing;