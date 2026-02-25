import React from 'react'
import Image from 'next/image'
import { RiSendPlaneFill } from "react-icons/ri"
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiArrowSortedUp
}
  from 'react-icons/ti'
import Images from '@/img'
import { Discover, HelpCenter } from '../Navbar'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_box_social}>
          <Image
            src={Images.logo}
            alt='footer logo'
            width={100}
            height={100}
          />

          <p>
            The world's first largest and digital marketplace for non-fungible tokens (NFTs). Buy, sell exclusive digital items
          </p>

          <div className={styles.footer_social}>
            <a href="#"><TiSocialFacebook /></a>
            <a href="#"><TiSocialLinkedin /></a>
            <a href="#"><TiSocialTwitter /></a>
            <a href="#"><TiSocialYoutube /></a>
          </div>
        </div>

        <div className={styles.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={styles.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={styles.subscribe_box}>
          <h3>Subscribe</h3>
          <div className={styles.subscribe_box_email}>
            <input type="email" placeholder='Enter your email' />
            <div className={styles.subscribe_box_send}>
              <RiSendPlaneFill/>
            </div>
          </div>

          <div className={styles.subscribe_box_info}>
            <p> discover collect and sell extraordinary NFT opensea is the marketplace</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer