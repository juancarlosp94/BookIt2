import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styles from "./menu.module.css"
// import MenuIcon from '@mui/icons-material/Menu';

export const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.containerMenu}>
        <Toolbar variant="dense" className={styles.contentOptionMenu}>
          
          <Typography variant="h6" component="div" className={styles.labelMenu}>
            Home
          </Typography>
          <Typography variant="h6"component="div" className={styles.labelMenu}>
            Booked
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}