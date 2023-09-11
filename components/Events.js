import Link from 'next/link';
import styles from '@/styles/sidebar.module.css';
import events from '@/public/events.png'
import Image from 'next/image';

const Events = () => {

  
  return (
    <div className={styles.events}>
    <div className={styles.title}>
      <Image src={events} className={styles.eventsicon}/>
      <p>Upcoming Events</p>
      </div>
    <ul className={styles.eventslist}>
      <li className={styles.eventitem}>Wilderness Workshop</li>
      <li className={styles.eventitem}>Full Moon Night Hike</li>
      <li className={styles.eventitem}>Coastal Kayaking Expedition</li>
    </ul>
    </div>
  );
}

export default Events;