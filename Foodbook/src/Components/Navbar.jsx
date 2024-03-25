import React from 'react'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IoIosArrowRoundBack } from "react-icons/io";

// import SegmentIcon from '@mui/icons-material/Segment';
import logo from '../General/Images/logo.png'


import { CgMenuRight } from "react-icons/cg";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <img src={logo} alt="My Image" style={{ height: '33px', width: '33px' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{

                            display: 'flex',

                            color: 'black',
                            textDecoration: 'none',
                            fontFamily: 'Kumar One',
                            fontWeight: 800, // Set font weight to 400
                            fontSize: '29px', // Set font size to 20px
                            lineHeight: '35.58px',
                            marginLeft: '6px'

                        }}

                    >
                        <span style={{ color: '#E78F00' }}>Food</span>
                        <span style={{ color: '#06093D' }}>Book</span>

                    </Typography>

                    <Button
                        aria-label="back"

                        style={{ display: 'flex', alignItems: 'center', marginLeft: '26px', color: 'black', background: '#06093D', borderRadius: '50px', width: '79px', height: '29px' }}

                    >
                        <IconButton style={{ color: 'white', fontSize: '29px', marginLeft: '12px' }} >
                            <IoIosArrowRoundBack />
                        </IconButton>
                        <Typography variant="body1" style={{ color: 'white', textTransform: 'none', marginRight: '28px', fontSize: '15px' }}>
                            Back
                        </Typography>
                    </Button>


                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <IconButton

                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{ color: 'black', fontSize: '1.9rem', fontWeight: 'lighter' }}
                        >
                            <CgMenuRight />

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Products</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact us</Typography>
                            </MenuItem>

                            
                        </Menu>
                    </Box>




                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar