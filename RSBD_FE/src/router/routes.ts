import React from 'react';
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Servers from "../pages/Servers";
import CreatePost from '../pages/CreatePost';

export interface IRoute {
    route: string;
    module: React.FunctionComponent;
}

export const routes: IRoute[] = [

    {
        route: '/',
        module: Home
    },

    {
        route: '/servers',
        module: Servers
    },

    {
        route: '/create',
        module: CreatePost
    },

    {
        route: '404',
        module: Error404
    },

    {
        route: '*',
        module: Error404
    }
];