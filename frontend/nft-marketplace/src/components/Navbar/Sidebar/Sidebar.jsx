import React, { useState } from 'react'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiArrowSortedUp
}
  from 'react-icons/ti'
import images from '../../../img'
import { Button } from '@/components/componentsIndex.js'
import styles from './Sidebar.module.css'
import Link from 'next/link'

const Sidebar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "nft-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "CContact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "Submission",
      link: "submission"
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  }

  const closeSidebar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div className={styles.sidebar}>
      <GrClose
        className={styles.sidebar_closeBtn}
        onClick={() => closeSidebar()}
      />
      <div className={styles.sidebar_box}>
        <Image
          src={images.logo}
          alt='logo'
          width={150}
          height={150}
        />
        <p>Discover the most outstanding article's on all topics of NFT & your own stories and share them</p>
        <div className={styles.sidebar_social}>
          <a href="#"><TiSocialFacebook /></a>
          <a href="#"><TiSocialLinkedin /></a>
          <a href="#"><TiSocialTwitter /></a>
          <a href="#"><TiSocialYoutube /></a>
        </div>
        <div className={styles.sidebar_menu}>
          <div
            className={styles.sidebar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Disconnect</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className={styles.sidebar_discover}>
                {
                  discover.map((el, i) => {
                    return (
                      <p key={i + 1}>
                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                      </p>
                    )
                  })
                }
              </div>
            )
          }
        </div>
        <div className="">
          <div className={styles.sidebar_menu_box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={styles.sidebar_discover}>
                {
                  helpCenter.map((el, i) => {
                    return (
                      <p key={i + 1}>
                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                      </p>
                    )
                  })
                }
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.sidebar_button}>
        <Button btnText="Create" />
        <Button btnText="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar
