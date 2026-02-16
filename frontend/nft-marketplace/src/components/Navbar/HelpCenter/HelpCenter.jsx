import React from 'react'
import Link from 'next/link'
import styles from './HelpCenter.module.css'
const HelpCenter = () => {
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
  ]
  return (
    <div className={styles.helpcenter}>
      {
        helpCenter.map((el, i) => {
          return (
            <div
              key={i + 1}
              className={styles.helpcenter_item}
            >
              <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default HelpCenter
