import React, {useRef, useEffect} from 'react'
import styles from "./Hero.module.css";
import Card from "../../UI/Card";
import storyImg0 from "../../../images/Backgrounds/storyimg0.jpg";
import storyImg1 from "../../../images/Backgrounds/storyimg1.jpg";
import faceShot from "../../../images/Avatar/avatar-86a790138d6f5bb8893cb9238eb21ae9.jpg";
import gsap from 'gsap';
export default function Hero() {
  const IntroRef = useRef();
  const span1 = useRef();
  const span2 = useRef();
  const span3 = useRef();
  const span4 = useRef();
  const slider = useRef();
  const headerRef = useRef();
  const cardRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({defaults: {
      ease:"power1.out"
    }});
    tl.to([span1.current, span2.current, span3.current, span4.current], {y: '0%', duration:1, stagger: 0.5});
    tl.to(slider.current, {y:'-100%', duration:1, delay:0.5});
    tl.to(IntroRef.current, {y:'-100%', duration:1}, '-=1');
    tl.to(headerRef.current, {opacity:1, duration: 1, delay:0.75});
    tl.to(cardRef.current, {duration:1, x: 0}, "-=.8" );
  },[]);
  return (
    <>
    <div ref={IntroRef} className={styles['intro-wrapper']}>
      <div className={styles.texthide}>
        <span ref={span1}className={styles.textw}> Because </span>
      </div>
      <div className={styles.texthide}>
        <span ref={span2} className={styles.textw}> Amazing </span>
      </div>
      <div className={styles.texthide}>
        <span ref={span3} className={styles.texty}> Italian cuisine</span>
      </div>
      <div className={styles.texthide}>
        <span ref={span4} className={styles.textw}> is our specialty </span>
      </div>
    </div>
    <div ref={slider} className={styles.slider}/>
    <div className={styles['hero-wrapper']} id="home">
        <div className={styles.heading} ref={headerRef}>
          <div className={styles['heading-wrapper']}>
          <h1 className={styles.title1}>Welcome to</h1>
          <h2 className={styles.title2}> The Valet </h2>
          </div>
        </div>
        <Card img1={storyImg0} img2={storyImg1} ref={cardRef}>
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
    </>
  );
}
