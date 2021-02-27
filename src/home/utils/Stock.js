import styles from './Stock.module.scss';
import {
    Link,
} from 'react-router-dom';

import {formatCurrency, formatPercent} from '../../core/formatter';

const Stock = ({ symbol, quantity, last, percentChange }) => {
const directionClass = percentChange >= 0 ? 'up-color' : 'down-color';

    return (
        <div className={styles.root}>
            <Link to={`/s/${symbol}`}>
                <div className={styles.symbol}>
                    {symbol}
                </div>
            </Link>
            <div className={styles.quantity}>
                {quantity} shares
            </div>
            <div className={styles.last}>
                {formatCurrency(last)}
            </div>
            <div className={`${styles.percentChange} ${directionClass}`}>
                {formatPercent(percentChange)}
            </div>
        </div>
    );
};

export default Stock;