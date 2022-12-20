import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { CustomDialog, dialogOpenSubject$ } from '@/pages';
import { FavoriteTable } from './FavoriteTable';

const Navbar = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EHTT
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
