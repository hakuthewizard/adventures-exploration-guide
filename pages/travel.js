import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Cards from '@/components/Cards';
import Courses from '@/components/Courses';
import travelvisual from '@/public/travelvisual.jpg';
import Image from 'next/image';
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { travelCourses } from '@/components/CourseComponents/travelCourses';
import Head from 'next/head';
const Travel = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Head><title>Adventure Travel</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
      {selectedItem ==='Courses' && <Courses courses={travelCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={travelvisual}/>
      <Sidebar/>
      </div>
    </div>
  )
}

export default Travel;