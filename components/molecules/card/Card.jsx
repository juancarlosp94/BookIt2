import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css'
import { MainButton } from '../../atoms/button/Button';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel } from '@/app/store/bookingSlice';

export const HotelCard = ({ hotel, snackbar }) => {

  const dispatch = useDispatch();

  const listHotelsBooked = useSelector(
    (state) => state.booking.hotelsBooked
  );
    
  const handleClick =()=> {
    localStorage.setItem('selectedHotel', JSON.stringify(hotel))

  };

  const handleBooking = () => {

    const hotelExists = listHotelsBooked.some((hotels) => hotels.name === hotel.name);

    if (hotelExists) {
      alert('You already booked this tour!')
    } else {
      dispatch(addHotel(hotel));
      snackbar(true);
    }

  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        <Typography gutterBottom variant="h5" component="div" className={styles.titleHotel}>
          {hotel.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" className={styles.descriptionHotel}>
          {hotel.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" className={styles.countryCityHotel}>
          Country: {hotel.country} , Country: {hotel.city}
        </Typography>

        <Typography variant="body2" color="text.secondary" className={styles.priceHotel}>
          Price:  ${hotel.price}
        </Typography>


      </CardContent>
      <CardActions className={styles.containerButton}>
        <Link href={`detail/${hotel.name}`}>
          <MainButton className={styles.buttonCardHotel}
            onClick={handleClick}>
            Details
          </MainButton>
        </Link>
        <MainButton className={styles.buttonCardHotel}
          onClick={handleBooking} >
          Book hotel
        </MainButton>
      </CardActions>
    </Card>
  );
}