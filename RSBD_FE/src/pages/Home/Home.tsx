import React from 'react';
import './style.scss';
import PostsContainer from '../../components/PostsContainer';
import useHome from './useHome';
import ReactLoading from 'react-loading';
import ErrorMessage from '../../components/ErrorMessage';
import PostFilter from '../../components/PostFilter';


const Home: React.FunctionComponent = () => {
    const {
        isFetching, posts, errors
    } = useHome();

    console.log(posts)


    return (
        <div className='Home'>
            <PostFilter/>
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
                    isFetching == false && posts.length == 0 &&
                    <ErrorMessage
                        title={'No posts'}
                        textContent={"I couldn't find any posts fiting your search criteria"}
                    />
                }

                {
                    isFetching == false && posts.length < 1 && errors.length > 0 &&
                    <ErrorMessage
                         title={"Error occured"}
                         textContent={"I couldn't fetch posts for you, I am very sorry. Please try again later."}
                     />
                }
            </div>
        </div>
    );
};

export default Home;