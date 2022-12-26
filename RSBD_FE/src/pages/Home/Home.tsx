import React from 'react';
import './style.scss';
import PostsContainer from '../../components/PostsContainer';


const Home: React.FunctionComponent = () => {

    return (
        <div className='Home'>
            <div className='Content'>
                <PostsContainer/>
            </div>
        </div>
    );
};

export default Home;