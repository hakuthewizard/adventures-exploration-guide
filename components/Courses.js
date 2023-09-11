import React from 'react';
import styles from '@/styles/courses.module.css';

const Courses = ({ courses }) => {
  return (
    <div className={styles.content}>
  
      <div className={styles.courseCards}>
     
        {courses.map((course, index) => (
          <div className={styles.courseCard} key={index}>
            <p className={styles.title}>{course.title}</p>
            <p className={styles.description}>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
