import React from 'react'
import Image from 'next/image'
import images from '../../../img'
import styles from './Notification.module.css'
const Notification = () => {
  return (
    <div className={styles.notification}>
      <p>Notifications</p>
      <div className={styles.notification_box}>
        <div className={styles.notification_box_img}>
          <Image 
            src={images.user1}
            alt='profile image'
            width={50}
            height={50}
          />
        </div>
        <div className={styles.notification_box_info}>
          <h4>Digvijay Desai</h4>
          <p>Measure action your user ...</p>
          <small>3 miniutes ago</small>
        </div>
        <span className={styles.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification
