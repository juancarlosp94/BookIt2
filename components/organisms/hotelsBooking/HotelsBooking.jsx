'use client'
import { HotelCard } from "../../molecules/card/Card";
import { useSelector } from "react-redux";

export const HotelsBooking = () => {

    const listHotelsBooked = useSelector(
        (state) => state.booking.hotelsBooked
      );

      return (
        <div>
            {listHotelsBooked.map((hotel,index) => (

                <HotelCard key={index} hotel={hotel}/>
            )
            )}
        </div>
      )

}