import React from 'react'
import SectionCard from '../UI/SectionCard'
import PartyCard from './PartyCard'
import ReservationImg from "../../images/Backgrounds/reservation.jpg"
import styles from "./Party.module.css";
export default function Party() {
  return (
    <SectionCard title={'Our Events'} subtitle={'Upcoming'}>
        <div className={`${styles['reserve-wrapper']} animate`}>
        <PartyCard img={ReservationImg} day={'08'} month={'JULY'} name={'Dj Cash'} time={'10:00am - 12:00pm'} />
        <PartyCard img={ReservationImg} day={'08'} month={'JULY'} name={'Dj Cash'} time={'10:00am - 12:00pm'} />
        <PartyCard img={ReservationImg} day={'08'} month={'JULY'} name={'Dj Cash'} time={'10:00am - 12:00pm'} />
        <PartyCard img={ReservationImg} day={'08'} month={'JULY'} name={'Dj Cash'} time={'10:00am - 12:00pm'} />
        </div>
    </SectionCard>
  )
}
