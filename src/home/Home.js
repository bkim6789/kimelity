import styles from './Home.module.scss';
import {useState} from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import Cash from './utils/Cash';
import Stock from './utils/Stock';
import SymbolChart from '../core/symbol-chart/SymbolChart';
import {priceStatesToChartState} from '../core/chart-utils';


const Home = ({activeUsername, portfolio, totalValue}) => {
    const [symbol, setSymbol] = useState('PORTFOLIO');
    const {labels, prices} = priceStatesToChartState(portfolio.cashStates, totalValue);

    if (!activeUsername) {
        return null;
    }

    const Stocks = portfolio.stocks.map(stock => 
        <Stock
            key={stock.symbol}
            symbol={stock.symbol}
            quantity={stock.quantity}
            last={stock.last}
            percentChange={stock.percentChange}
        />
    );

    return (
        <div className={styles.root}>
            <div className={styles.mainContent}>
                <SymbolChart
                    symbol={symbol}
                    labels={labels}
                    prices={prices}
                />
            </div>
            <div className={styles.portfolioContent}>
                <Paper elevation={3} style={{height: '100%', overflowY: 'scroll'}}>
                    <Cash cash={portfolio.cash}/>
                    {Stocks}
                </Paper>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        activeUsername: state.activeUsername,
        portfolio: state.portfolio,
        totalValue: state.totalValue,
    };
};

export default connect(mapStateToProps)(Home);