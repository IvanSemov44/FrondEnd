import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to="/">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Link to="catalog">
                    <Button>
                        Catalog
                    </Button>
                </Link>
                <Link to="login">
                    <Button color="warning">
                        Login
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
)

export default NavBar