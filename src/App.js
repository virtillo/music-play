import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './components/Home';
import Video from './components/Video';

import './scss/global.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route
                    render={({ location }) => (
                        <div>
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                                    <Switch location={location}>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/video/:id" component={Video} />
                                        <Route render={() => <Redirect to="/" />}  />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    )}
                />
            </BrowserRouter>
        );
    }
}

export default App;
