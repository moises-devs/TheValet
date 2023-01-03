import React from 'react'
import SectionCard from '../UI/SectionCard'
import styles from "./DailySpecial.module.css";
import specialDish from "../../images/Dishes/pexels-photo-64208.jpg";
import fakePerson from "../../images/Avatar/fakeperson.jpg";
import { motion } from 'framer-motion'; 

const cardVariant = {
  hidden: {
    opacity:0,
    y:'50%',
  },
  show: {
    opacity:1,
    y:0,
  }
}

export default function DailySpecial() {
  return (
    <SectionCard title={'Daily Special'} subtitle={'Discover'}>
      <motion.div variants={cardVariant} whileInView="show" initial="hidden" className={`${styles['section-wrapper']}`}>
        <div className={styles['img-wrapper']}>
          <hr className={styles.box} />
          <img src={specialDish} alt="today's special"/>
        </div>
        <div className={styles['img-details']}>
          <p className={styles.title}>Grilled Shrimip Scampi</p>
          <p className={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus lacus et mattis ornare. Curabitur
           risus sapien, luctus consequat viverra non, vestibulum non.
          </p>
          <p className={styles.price}>$13.99</p>
          <div className={styles['details-wrapper']}>
            <div className={styles['details-img-wrapper']}>
              <img src={fakePerson} alt=""/>
            </div>
            <p className={styles['details-quote']}>
              "Made with Love in our beloved kitchen"
            </p>
          </div>
        </div>
      </motion.div>
    </SectionCard>
  )
}
