import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import AppTheme from './core/AppTheme';
import AppToolbar from './core/app-toolbar/AppToolbar';
import Login from './login/Login';
import Home from './home/Home';
import Symbol from './symbol/Symbol';
import Ticket from './ticket/Ticket';

const App = () => {
    const routeSwitch = (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/s/:symbol">
                <Symbol />
            </Route>
            {/* Default */}
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );

    return (
        <AppTheme>
            <Router>
                <AppToolbar />
                <div className={styles.content}>
                    {routeSwitch}
                </div>
            </Router>
            <Ticket/>
        </AppTheme>
    );
};

export default App;