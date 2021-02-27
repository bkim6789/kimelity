import styles from './Login.module.scss';
import {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import {setActiveUsername, setPortfolio} from '../store/actions';
import AppLogo from '../core/logo/AppLogo';

const useStyles = makeStyles({
    login: {
        'margin-top': '25px',
        width: '100%',
    },
});

const Login = ({setActiveUsername, setPortfolio}) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleKeyDown = event => {
        if (event.key !== 'Enter') return;

        login();
    }

    const login = async () => {
        const config = {username, password};
        const res = await axios.post('http://localhost:9000/user/login', config);
        const { data } = res;


        if (!data) {
            setError('Invalid username and/or password');
            return;
        }

        setActiveUsername(username);
        setPortfolio(data);
        history.push('/');
    };

    const errorMessage = error ? <span>{error}</span> : null;

    return (
        <div className={styles.root}>
            <div className={styles.logoWrapper}>
                <AppLogo className={styles.logo} test={'hello'}/>
            </div>
            <TextField
                className={styles.input}
                label="username"
                value={username}
                onChange={handleUsernameChange}
                onKeyDown={handleKeyDown}
            />
            <TextField
                className={styles.input}
                label="password"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyDown}
            />
            <Button
                className={classes.login}
                color="secondary"
                variant="contained"
                onClick={login}
            >
                Login
            </Button>
            <div className={styles.error}>
                {errorMessage}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    setActiveUsername,
    setPortfolio,
};

export default connect(null, mapDispatchToProps)(Login);
