import styles from './AppLogo.module.scss';
import logo from '../../assets/app-logo.png';

const KimelityLogo = ({className, disableIcon}) => {
    const Icon = disableIcon ? null : <img src={logo} alt="Logo" width="30" height="30" />;


    return (
        <div className={className}>
            <div className={styles.logo}>
                {Icon}
                <span>Kimelity</span>
            </div>
        </div>
    );
};

export default KimelityLogo;
