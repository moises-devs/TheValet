import React from 'react'
import styles from "./Booking.module.css";
import SectionCard from '../UI/SectionCard';
import Input from '../UI/Input';
export default function Booking() {
  return (
    <div className={styles['container-Bg']} id={'reservation'}>
        <div className={`${styles['booking-Wrapper']}`}>
            <div className={styles['schedule-Wrapper']}>
                <div className={styles['heading-Wrapper']}>
                <h2 className={styles['top-Heading']}>Time</h2>
                <p className={styles['top-Heading-Detail']}>Open</p>
                </div>
                <div className={styles['detail-Section']}>
                    <p className={styles['bright-Heading']}>
                        Monday-Friday
                    </p>
                    <p className={styles.detail}>
                    7AM - 11AM (Breakfast)
                    </p>
                    <p className={styles.details}>
                    11AM - 10PM (Lunch/Dinner)
                    </p>
                </div>
                <div className={styles['detail-Section']}>
                    <p className={styles['bright-Heading']}>
                    SATURDAY / SUNDAY
                    </p>
                    <p className={styles.detail}>
                    8AM - 1PM (Brunch)
                    </p>
                    <p className={styles.details}>
                    1PM - 9PM (Lunch/Dinner)
                    </p>
                </div>
                <p className={`${styles['bright-Heading']} ${styles['large-Heading']}`}>
                        323-569-3256
                </p>
            </div>
            <SectionCard title={'Online Booking'} subtitle={'Reservation'} transparent={false} >
                <form className={styles['form-wrapper']}>
                    <Input type={'text'} id={'name'} placeholder={'Your Name*'} required={true} />
                    <Input type={'email'} id={'email'} placeholder={'Your Email*'} required={true} />
                    <Input type={'Mobile Number'}  id={'number'} placeholder={'Mobile Number *'} required={true} />
                    <Input type={'date'} id={'date'} placeholder={'Date*'}
                    required={true} />
                    <Input type={'text'} id={'time'} placeholder={'HH-MM(24hr format) *'} required={true}/>
                    <Input min={2} max={10} type={'number'} id={'number'} placeholder={'No. of Persons*'} required={true}/>
                    <button className={styles.btn} type={'button'}>Book a Table</button>
                </form>
            </SectionCard>
        </div>
    </div>
  )
}
