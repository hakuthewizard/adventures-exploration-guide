import React from 'react'
import styles from '@/styles/cards.module.css'

const Cards = () => {
  return (
    <div className={styles.cards}>
    <div className={styles.card1}>
      <p className={styles.title}>Facilities</p>
      <p className={styles.numberof}>25</p>
    </div>
    <div className={styles.card2}>
      <p className={styles.title}>Branches</p>
      <p className={styles.numberof}>6</p>
    </div>
    <div className={styles.card3}>
      <p className={styles.title}>Employees</p>
      <p className={styles.numberof}>45</p>
    </div>
    <div className={styles.card4}>
      <p className={styles.title}>Total Events</p>
      <p className={styles.numberof}>105</p>
    </div>
    </div>
  )
}

export default Cards