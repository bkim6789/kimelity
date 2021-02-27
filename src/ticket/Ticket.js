import { connect } from 'react-redux';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { toggleIsTicketOpen } from '../store/actions';
import {formatCurrency} from '../core/formatter';

const Ticket = ({
    toggleIsTicketOpen,
    portfolio,
    isTicketOpen,
}) => {
    const [symbol, setSymbol] = useState('');
    const [orderType, setOrderType] = useState('');

    const handleClose = () => {
        toggleIsTicketOpen();
    };

    const handleTrade = () => {
        console.log('trade');
    }

    const handleSymbolChange = event => {
        setSymbol(event.target.value);
    }

    return (
        <Dialog open={isTicketOpen} onClose={handleClose} aria-labelledby="ticket-dialog-title">
            <DialogTitle id="ticket-dialog-title">Trade</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Cash available to trade: {formatCurrency(portfolio.cash)}
                </DialogContentText>
                <InputLabel id="order-type-label">
                    Order Type
                </InputLabel>
                <Select
                    labelId="order-type-label"
                    value={orderType}
                    onChange={event => setOrderType(event.target.value)}
                >
                    <MenuItem value="buy">Buy</MenuItem>
                    <MenuItem value="sell">Sell</MenuItem>
                </Select>
                <TextField
                    label="symbol"
                    value={symbol}
                    onChange={handleSymbolChange}
                >

                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleTrade} color="secondary">
                    Trade
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = state => {
    return {
        isTicketOpen: state.isTicketOpen,
        portfolio: state.portfolio,
    };
};

const mapDispatchToProps = {
    toggleIsTicketOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);