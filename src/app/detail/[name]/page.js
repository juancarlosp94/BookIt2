"use client"
import React, { useContext, useEffect, useState } from "react"
import { MainButton } from "../../../../components/atoms/button/Button";
import styles from './page.module.css'
import { AppContext } from "@/app/store/CurrentProvider";

const Detail = () => {

    const [selectedHotel, setSelectedHotel] = useState({
        name: '',
        description: '',
        photo: '',
        country: ''
    });

    const {setDetailPage} = useContext(AppContext)

    useEffect(() => {
        const storedHotel = localStorage.getItem('selectedHotel');
        if (storedHotel) {
            setSelectedHotel(JSON.parse(storedHotel))
        }
        setDetailPage()
    }, []);

    const { name, photo, description, country, city } = selectedHotel


    return (
        <div className={styles.container}>
            <img src={photo} width={300} height={300} className={styles.detailImage} />
            <h2>
                {name}
            </h2>
            <p>{description}</p>
            <p>Country: {country}</p>
            <p>City: {city}</p>
            <div className={styles.buttonContainer}>
                <MainButton className={styles.buttonCardHotel}>Book</MainButton>
                <MainButton className={styles.buttonSecondary}>Favorites</MainButton>
            </div>
        </div>
    )
}

export default Detail