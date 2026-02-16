"use client"
import { React, useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {
    Discover,
    HelpCenter,
    Notification,
    Profile,
    Sidebar
} from './index'
import images from '../../img'
import { mdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { use } from 'chai'
const Navbar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText === "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        } else if (btnText === "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        } else {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    }

    return (
        <>
            <div className={styles.navbar}>
                {/* NAVBAR CONTAINR */}
                <div className={styles.navbar_container}>
                    {/* LEFT SECTION */}
                    <div className={styles.navbar_container_left}>
                        <div className={styles.logo}>
                            <Image
                                src={images.logo}
                                alt="NFT MARKET PLACE"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.navbar_container_left_box_input}>
                            <div className={styles.navbar_container_left_box_input_box}>
                                <input
                                    type="text"
                                    placeholder="Search NFTs"
                                />
                                <BsSearch
                                    className={styles.search_icon}
                                    onClick={() => { }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* END OF LEFT SECTION */}

                    {/* RIGHT SECTION */}
                    <div className={styles.navbar_container_right}>
                        {/* DISCOVER MENU */}
                        <div className={styles.navbar_container_right_discover}>
                            <p onClick={(e) => openMenu(e)}>Discover</p>
                            {discover && (
                                <div className={styles.navbar_container_right_discover_box}>
                                    <Discover />
                                </div>
                            )}
                        </div>
                        {/* Discover Menu END */}

                        {/* HELP CENTER MENU */}
                        <div className={styles.navbar_container_right_help}>
                            <p onClick={(e) => openMenu(e)}>Help Center</p>
                            {help && (
                                <div className={styles.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                        </div>
                        {/* END OF HELP CENTER MENU */}
                    </div>
                    {/* END OF RIGHT SECTION */}
                </div>
                {/* end of navbar container */}
            </div>
        </>
    )
}

export default Navbar
