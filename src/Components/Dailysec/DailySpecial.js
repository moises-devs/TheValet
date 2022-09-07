import React from 'react'
import SectionCard from '../UI/SectionCard'
import styles from "./DailySpecial.module.css";
import specialDish from "../../images/Dishes/pexels-photo-64208.jpg";
import fakePerson from "../../images/Avatar/fakeperson.jpg";
export default function DailySpecial() {
  return (
    <SectionCard title={'Daily Special'} subtitle={'Discover'}>
      <div className={styles.sectionwrapper}>
        <div className={styles.imgwrapper}>
          <hr className={styles.box} />
          <img src={specialDish} alt="today's special"/>
        </div>
        <div className={styles.imgdetails}>
          <p className={styles.title}>Grilled Shrimip Scampi</p>
          <p className={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus lacus et mattis ornare. Curabitur
           risus sapien, luctus consequat viverra non, vestibulum non.
          </p>
          <p className={styles.price}>$13.99</p>
          <div className={styles.detailswrapper}>
            <div className={styles.detailsimgwrapper}>
              <img src={fakePerson} alt=""/>
            </div>
            <p className={styles.detailsquote}>
              "Made with Love in our beloved kitchen"
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}
