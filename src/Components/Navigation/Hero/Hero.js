import React from 'react'
import styles from "./Hero.module.css";
import Card from "../../UI/Card";
import storyImg0 from "../../../images/Backgrounds/storyimg0.jpg";
import storyImg1 from "../../../images/Backgrounds/storyimg1.jpg";
import faceShot from "../../../images/Avatar/avatar-86a790138d6f5bb8893cb9238eb21ae9.jpg";
import { motion } from 'framer-motion';

const heroVariants = {
  hidden:false,
  show:{
    opacity: 1,
    y:0,
    transition:{
      staggerChildren:0.3,
      delayChildren:0.5,
    }
  }
};

const headerVariant = {
  hidden:{
    opacity:0,
  },
  show: {
    opacity:1,
    transition:{
      staggerChildren:0.3,
      delayChildren:0.5,
    }
  }
};

const itemVariants= {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Hero() {

  return (
    <motion.div className={styles['hero-wrapper']} id="home" variants={heroVariants} animate="show" initial="hidden">
        <motion.div className={styles.heading} variants={headerVariant} >
          <motion.h1 variants={itemVariants} className={styles.title1}>Welcome to</motion.h1>
          <motion.h2 className={styles.title2} variants={itemVariants} > The Valet </motion.h2>
        </motion.div>
        <Card img1={storyImg0} img2={storyImg1}>
          <h3> Discover </h3>
          <h2> Our Story </h2>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum 
          facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
          </p>
          <div className={styles.imgwrapper}> 
            <img src={faceShot} alt="owner name"/>
            <h3> De la Tierra </h3>
          </div>
        </Card>
    </motion.div>
  );
}
