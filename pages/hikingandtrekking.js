import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { hikingandtrekkingCourses } from '@/components/CourseComponents/hikingandtrekkingCourses';
import hikingvisual from '@/public/hikingvisual.jpg';
import Image from 'next/image';
import Head from 'next/head';


const HikingandTrekking = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
       <Head><title>Hiking and Trekking</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
       
      {selectedItem ==='Courses' && <Courses 
      courses={hikingandtrekkingCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={hikingvisual}/>
      <Sidebar/>
    
      </div>
    
    </div>
  )
}

export default HikingandTrekking;