import styles from './Cash.module.scss';
import {formatCurrency} from '../../core/formatter';

const Cash = ({cash}) => {
    return (
        <div className={styles.root}>
            <div className={styles.label}>
                Cash
            </div>
            <div className={styles.cashValue}>
                {formatCurrency(cash)}
            </div>
        </div>
    );
};

export default Cash;