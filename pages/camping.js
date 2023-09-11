import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Courses from '@/components/Courses';
import campingvisual from '@/public/campingvisual.jpg'
import Events from '@/components/Events';
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/main.module.css'
import { campingCourses } from '@/components/CourseComponents/campingCourses';
import Image from 'next/image';
import Head from 'next/head';

const Camping = () => {
  const [selectedItem, setSelectedItem] = useState('Courses');
  
  const handleDropdownChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Head><title>Camping</title></Head>
       <Navbar/>
       <div className={styles.content}>
       <Dropdown onChange={handleDropdownChange} />
      {selectedItem ==='Courses' && <Courses courses={campingCourses}/>}
      {selectedItem ==='Events' && <Events/>}
      {selectedItem === 'Facilities' && <Facilities/>}
      <Image className= {styles.visual} src={campingvisual}/>
      <Sidebar/>
      </div>

    </div>
  )
}

export default Camping
;