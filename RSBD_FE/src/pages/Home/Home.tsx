import React from 'react';
import { useHome } from './utils';

//Style
import './style.scss';
import PostsContainer from '../../components/PostsContainer';


const Home: React.FunctionComponent = () => {
    const { 

    } = useHome();


    return (
        <div className='Home'>
           <PostsContainer/>
        </div>
    );
};

export default Home;