import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/sidebar.module.css';
import Image from 'next/image';
import hikingandtrekking from '@/public/hiking-and-trekking.png';
import camping from '@/public/camping.png';
import photography from '@/public/photography.png';
import climbing from '@/public/climbing.png';
import crafts from '@/public/crafts.png';
import travel from '@/public/travel.png';
import Events from '@/components/Events';

const Sidebar = () => {
  const router = useRouter();

  
  const links = [
    { label: 'Hiking and Trekking', path: '/hikingandtrekking', icon: hikingandtrekking },
    { label: 'Camping', path: '/camping', icon: camping},
    { label: 'Wildlife Photography', path: '/photography', icon: photography },
    { label: 'Rock Climbing', path: '/climbing', icon: climbing },
    { label: 'Nature-inspired Crafts', path: '/crafts', icon: crafts },
    { label: 'Adventure Travel', path: '/travel', icon: travel },
  ];

  return (
    <div className={styles.sidevents}>
      
      <div className={styles.sidebar}>
        {links.map((link) => (
          <Link key={link.path} href={link.path} legacyBehavior>
            <a className={`${styles.sidebarlink} ${router.pathname === link.path ? styles.current : ''}`}>
              <Image className={styles.icons} src={link.icon} alt={link.label} />
              {link.label}
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.events}>
        <Events />
      </div>
    </div>
  );
};

export default Sidebar;
