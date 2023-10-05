"use client"
import { useEffect, useState } from "react";
import { hotelData } from "../../services/getHotelServices";
import { HotelCard } from "../molecules/card/card";
import { Header } from "../molecules/header/header";
import { hotelRooms } from "@/app/utils/helper";
import { Alert, Snackbar } from "@mui/material";
import styles from "./cardsFilter.module.css"

export const CardsFilter = ({getHotelsData}) => {
    
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedSize, setSelectedSize] = useState('all');
    const [selectedDateFrom, setSelectedDateFrom] = useState('all');
    const [selectedDateTo, setSelectedDateTo] = useState('all');
    const [filterHotel, setFileterHotel] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);
    // const [hotelsData, setHotelsData] = useState([]);

    // const fetchHotels = async() => {
    //     try {
    //         const data = await hotelData();
    //         setHotelsData(data);
    //     } catch (error) {
    //         console.error("An error occurred when tryng to reach hotels information")
    //     }

    // }

    // useEffect(() => {

    //     fetchHotels();

    // }, []);

    useEffect(() => {
        const newDateFrom = new Date(selectedDateFrom);
        const newDateFromMS = newDateFrom.getTime();
        const newDateTo = new Date(selectedDateTo);
        const newDateToMS = newDateTo.getTime();
        const Today = new Date().setHours(0,0,0,0);
        const dateCheckInLocal = new Date (
            newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
        );
        const dateCheckOutLocal = new Date (
            newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
        );

        const filteredHotels = getHotelsData.filter((hotel) => {
            const availabilityHotels = Today + hotel.availabilityFrom
            const availabilityDays = availabilityHotels + hotel.availabilityTo

            const isCountryMatch = selectedCountry === 'all' || selectedCountry.toLowerCase() === hotel.country.toLowerCase();
            const isPriceMatch = selectedPrice === 'all' || selectedPrice.toString() === hotel.price.toString();
            const isSizeMatch = selectedSize === 'all' || selectedSize === hotelRooms(hotel.rooms);
            const availability = (selectedDateFrom === 'all' && selectedDateFrom === 'all') || dateCheckInLocal.getTime() >= availabilityHotels && 
            dateCheckOutLocal <= availabilityDays;
            
            return isCountryMatch && isPriceMatch && isSizeMatch && availability;
        });
        setFileterHotel(filteredHotels)
    }, [
        selectedCountry,
        selectedPrice,
        selectedSize,
        selectedDateFrom,
        selectedDateTo,
    ])
   

    // const filterHotel = () => {

    //     const newDateFrom = new Date(selectedDateFrom);
    //     const newDateFromMS = newDateFrom.getTime();
    //     const newDateTo = new Date(selectedDateTo);
    //     const newDateToMS = newDateTo.getTime();
    //     const Today = new Date().setHours(0,0,0,0);
    //     const dateCheckInLocal = new Date (
    //         newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
    //     );
    //     const dateCheckOutLocal = new Date (
    //         newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
    //     );

    //     const filteredHotels = getHotelsData.filter((hotel) => {
    //         const availabilityHotels = Today + hotel.availabilityFrom
    //         const availabilityDays = availabilityHotels + hotel.availabilityTo

    //         const isCountryMatch = selectedCountry === 'all' || selectedCountry.toLowerCase() === hotel.country.toLowerCase();
    //         const isPriceMatch = selectedPrice === 'all' || selectedPrice.toString() === hotel.price.toString();
    //         const isSizeMatch = selectedSize === 'all' || selectedSize === hotelRooms(hotel.rooms);
    //         const availability = (selectedDateFrom === 'all' && selectedDateFrom === 'all') || dateCheckInLocal.getTime() >= availabilityHotels && 
    //         dateCheckOutLocal <= availabilityDays;
            
    //         return isCountryMatch && isPriceMatch && isSizeMatch && availability;
    //     })

    //     return filteredHotels
    // };

    

    return (
        <>
            <Header 
            updateCity={setSelectedCountry}
            updatePrice={setSelectedPrice}
            updateSize={setSelectedSize}
            updateDateTo={setSelectedDateTo}
            updateDateFrom={setSelectedDateFrom}
            />
            <div className={styles.cardsContainer}>
                {filterHotel.length > 0 ? (
                    filterHotel.map(( hotel, index ) => (
                        <HotelCard key={index} hotel={hotel} snackbar={setShowSnackbar}/>
                    ))
                ) : (
                    <h2 className="noResultsMessage">There are not results for your search</h2>
                )}
            </div>
            <Snackbar 
            open={showSnackbar} 
            autoHideDuration={5000} 
            onClose={setShowSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert  severity="success" sx={{ width: '100%' }}>
                Hotel Booked Successfully!
                </Alert>
            </Snackbar>         
            
        </>
        
    );
};