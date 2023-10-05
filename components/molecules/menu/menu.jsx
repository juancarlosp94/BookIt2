"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./menu.module.css"
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
          <Link href={'/'}>
          <Typography variant="h6" component="div" className={styles.labelMenu}>
            Home
          </Typography>
          </Link>
          <Typography variant="h6"component="div" className={styles.labelMenu}>
            Booked
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}