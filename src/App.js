import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import theme from './theme';
import Header from './components/Header';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { connect } from 'react-redux';
import { fetchContacts } from './store/actions/actions';
import ContactForm from './components/ContactForm';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));

function App({ fetchContacts }) {
    const classes = useStyles();
    const [sidebarOpened, setSidebarOpened] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const toggleSidebar = () => setSidebarOpened(!sidebarOpened);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.root}>
                    <Header
                        sidebarOpened={sidebarOpened}
                        toggleSidebar={toggleSidebar}
                    />
                    <Sidebar
                        sidebarOpened={sidebarOpened}
                        toggleSidebar={toggleSidebar}
                    />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Switch>
                            <Route path="/form/:id" component={ContactForm} />
                            <Route path="*">
                                <Redirect to="/form/new" />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </ThemeProvider>
        </Router>
    );
}

const mapDispatchToProps = {
    fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);