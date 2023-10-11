"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./Menu.module.css"
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/app/store/CurrentProvider';
// import MenuIcon from '@mui/icons-material/Menu';

export const Menu = () => {

  const {currentPage} = useContext(AppContext);

  const title = (current) => {
    switch(current){
      case 'Detail':
        return 'Hotel detail'
      case 'Home':
        return 'Search Hotel';
      default:
        return 'Welcome'
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.containerMenu}>
        <Toolbar variant="dense" className={styles.contentOptionMenu}>
          <h3>{title(currentPage)}</h3>
          <div className={styles.labelBlock}>
          <Link className={styles.labelLink} href={'/'}>
          <Typography variant="h6" component="div" className={styles.labelMenu}>
            Home
          </Typography>
          </Link>
          <Link className={styles.labelLink} href={'/hotelsBooked'}>
          <Typography variant="h6"component="div" className={styles.labelMenu}>
            Booked
          </Typography>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
