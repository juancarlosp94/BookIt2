import { HotelData } from "../../services/getHotelServices";
import { HotelCard } from "../molecules/card/Card";
import { Header } from "../molecules/header/header";
import styles from './CardsFilter.modules.css';

export const CardsFilter = () => {
    
    return (
        <>
            <Header/>
            <div className={styles.cardsContainer}>
                {HotelData.map(( hotel, index ) => {
                    <HotelCard key={index} hotel={hotel}/>
                })}

            </div>
        </>
        
    )
} 