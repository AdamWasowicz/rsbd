import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes, IRoute }  from '../../router';
import './style.scss';
import Navigation from '../Navigation';
import { NavigationRoute } from '../Navigation/types';

const App: React.FunctionComponent = () => {
    const navigationProps: NavigationRoute[] = [
        {
            caption: 'Posts',
            route: '/'
        },

        {
            caption: 'Create',
            route: '/create'
        },

        {
            caption: 'Servers',
            route : '/servers'
        }
    ]


    return (
        <div className='App'>
            <Router>
                <Navigation routes={navigationProps}/>
                <Routes>
                    {
                        routes.map((route: IRoute, i: number) => (
                            <Route
                                key={i}
                                path={route.route}
                                element={<route.module/>}
                            />
                        ))
                    }
                </Routes>
            </Router>
        </div>
    );
};

export default App;