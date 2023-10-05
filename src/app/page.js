"use client"
import { Card } from '@mui/material'
import { CardsFilterTemplate } from '../../components/template/CardsFilterTemplate/cardsFilterTemplate.jsx'
import styles from './page.module.css'
import { hotelData } from '../../services/getHotelServices.js'

// De acuerdo a next 13 nuestra llamada a la API tiene que hacerse en el punto mas alto de mi aplicacion. En este caso es el 
// componente Home()

export default async function Home() {

  const getHotelsData = await hotelData();
  
  return (
    <>
        <CardsFilterTemplate getHotelsData={getHotelsData}/>
    </>
  )
}
