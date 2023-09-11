import React from 'react'
import { useState } from 'react'
import styles from '@/styles/dropdown.module.css'


export const Dropdown = ({ onChange }) => {
  
  const handleDropdownChange = (e) => {
    const selectedItem = e.target.value;
    onChange(selectedItem);
  };

  return (

    <div className={styles.dropdown}>
  
      <select className={styles.list} onChange={handleDropdownChange}>
        <option className={styles.listitem} value="Courses">Courses</option>
      </select>

    </div>


  )
}
