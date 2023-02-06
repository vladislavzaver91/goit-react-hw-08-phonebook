import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { toggleTheme } from 'redux/theme/themeSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const NavBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
    <AppBar 
    position="static" 
    sx={{
        maxWidth: 'xl',
    }}
    > 
    <Toolbar 
    sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        }}
    >
        <Typography 
        variant="h6"
        component="span"
        mr={5}
        sx={{ display: { xs: 'none', md: 'inline-block' } }}
        >
            MyPhonebook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <ThemeToggler />
    </Toolbar>
    </AppBar>
    );
};

function ThemeToggler() {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
    <> 
        <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
            dispatch(toggleTheme());
        }}
        color="inherit"
        >
        {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
        ) : (
            <Brightness4Icon />
        )}
        </IconButton>
    </>
    );
};