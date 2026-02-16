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
import { MdNotifications, mdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { use } from 'chai'
import Button from '../Button/Button'
const Navbar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

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

    const openNotification = () => {
        if (!notification) {
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);
        } else {
            setNotification(false);
        }
    }
    const openProfile = () => {
        if (!profile) {
            setProfile(true);
            setNotification(false);
            setDiscover(false);
            setHelp(false);
        } else {
            setProfile(false);
        }
    }
    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true);
            setProfile(false);
            setNotification(false);
            setDiscover(false);
            setHelp(false);
        } else {
            setOpenSideMenu(false);
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
                        {/* NOTIFICATION MENU */}
                        <div className={styles.navbar_container_right_notify}>
                            <MdNotifications
                                className={styles.notify}
                                onClick={() => openNotification()}
                            />
                            {notification && <Notification />}
                        </div>
                        {/* END OF Notification Meun */}
                        {/* Create Button Section */}
                        <div className={styles.navbar_container_right_button}>
                            <Button btnText="Create" />
                        </div>
                        {/* End of Button Section */}
                        {/* USER PROFILE */}
                        <div className={styles.navbar_container_right_profile_box}>
                            <div className={styles.navbar_container_right_profile}>
                                <Image
                                    src={images.user1}
                                    alt="User Profile"
                                    width={40}
                                    height={40}
                                    onClick={() => openProfile()}
                                    className={styles.navbar_container_right_profile}
                                />
                            </div>
                            {profile && <Profile />}
                        </div>
                        {/* END OF USER PROFILE */}
                        {/* MENU BITTON */}
                        <div className={styles.navbar_container_right_menuBtn}>
                            <CgMenuRight
                                className={styles.menuIcon}
                                onClick={() => openSideBar()}
                            />
                        </div>
                        {/* END OFMENU BITTON */}
                    </div>
                    {/* END OF RIGHT SECTION */}
                </div>
                {/* end of navbar container */}
                {/* SIDEBAR COMPONENT */}
                {
                    openSideMenu && (
                        <div className={styles.Sidebar}>
                            <Sidebar setOpenSideMenu={setOpenSideMenu} />
                        </div>
                    )
                }
                {/* END OF SIDEBAR COMPONENT */}
            </div>
        </>
    )
}

export default Navbar
