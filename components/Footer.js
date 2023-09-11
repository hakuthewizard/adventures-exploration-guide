import React from 'react';
import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['footer-content']}>
      <p>&copy; {new Date().getFullYear()} Adventures and Exploration Guide by Beyza Ballı</p>
      <ul className={styles['footer-links']}>
        <li><a href="https://www.linkedin.com/in/beyza-b-014882177/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
        <li><a href="https://beyzaballi-artportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Art Portfolio</a></li>
        <li><a href="https://front-end-portfolio-design-project.vercel.app/" target="_blank" rel="noopener noreferrer">UI Dev/Front End Portfolio</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
