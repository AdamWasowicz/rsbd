import { IRoute } from "./IRoute";

//Routes
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

export const routes: IRoute[] = [

    {
        route: '/',
        module: Home
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