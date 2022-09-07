import React from 'react'
import styles from "./Hero.module.css";
import Card from "../../UI/Card";
import storyImg0 from "../../../images/Backgrounds/storyimg0.jpg";
import storyImg1 from "../../../images/Backgrounds/storyimg1.jpg";
import faceShot from "../../../images/Avatar/avatar-86a790138d6f5bb8893cb9238eb21ae9.jpg";
export default function Hero() {
  return (
    <div className={styles['hero-wrapper']} id="home">
        <div className={styles.heading}>
          <div className={styles['heading-wrapper']}>
          <h1 className={styles.title1}>Welcome to</h1>
          <h2 className={styles.title2}> The Valet </h2>
          </div>
        </div>
        <Card img1={storyImg0} img2={storyImg1}>
          <h3> Discover </h3>
          <h2> Our Story </h2>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum 
          facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
          </p>
          <div> 
            <img src={faceShot} alt="owner name"/>
            <h3> De la Tierra </h3>
          </div>
        </Card>
    </div>
  );
}
