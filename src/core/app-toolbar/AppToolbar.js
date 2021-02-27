import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';

import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoodIcon from '@material-ui/icons/Mood';

import AppLogo from '../logo/AppLogo';
import SearchInput from './SearchInput';
import {toggleIsTicketOpen} from '../../store/actions';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
}));

const AppToolbar = ({toggleIsTicketOpen}) => {
    const classes = useStyles();
    const [symbol, setSymbol] = useState('');

    const handleSymbolChange = searchText => {
        console.log('change:', searchText);
        setSymbol(searchText);
    };

    const handleKeyDown = event => {
        if (event.key !== 'Enter') return;

        console.log('symbol:', symbol);
    };

    const openTicket = () => {
        toggleIsTicketOpen();
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <AppLogo disableIcon={true}/>
                <SearchInput onChange={handleSymbolChange}/>
                <div className={classes.grow} />
                <Button 
                    component={Link}
                    to="/login"
                    color="inherit"
                >
                    Login
                </Button>
                <IconButton color="inherit" onClick={openTicket}>
                    <MoodIcon />
                </IconButton>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const mapDispatchToProps = {
    toggleIsTicketOpen,
};

export default connect(null, mapDispatchToProps)(AppToolbar);
