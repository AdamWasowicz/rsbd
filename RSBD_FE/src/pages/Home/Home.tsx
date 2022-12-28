import React from 'react';
import './style.scss';
import PostsContainer from '../../components/PostsContainer';
import useHome from './useHome';
import ReactLoading from 'react-loading';
import ErrorMessage from '../../components/ErrorMessage';


const Home: React.FunctionComponent = () => {
    const {
        isFetching, posts, errors
    } = useHome();

    console.log(posts)


    return (
        <div className='Home'>
            {
                isFetching &&
                <div className='Overlay'>
                    <ReactLoading
                        type={'spin'}
                        height={'25%'}
                        color={'#2592eb'}
                        width={'25%'}
                        className='Loader'
                    />
                </div>
            }

            <div className='Content'>
                {
                    isFetching == false && posts.length > 0 &&
                    <PostsContainer />
                }

                {
                    isFetching == false && posts.length < 1 && errors.length > 0 &&
                    <ErrorMessage
                         tittle={"Error occured"}
                         textContent={"I couldn't fetch posts for you, I am very sorry. Please try again later."}
                     />
                }
            </div>
        </div>
    );
};

export default Home;