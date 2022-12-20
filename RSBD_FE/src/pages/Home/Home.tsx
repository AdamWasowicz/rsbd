import React from 'react';
import { useHome } from './utils';

//Style
import './style.scss';


const Home: React.FunctionComponent = () => {
    const { 

    } = useHome();


    return (
        <div className='Home'>
           <h1>RSBD_FE</h1>
        </div>
    );
};

export default Home;