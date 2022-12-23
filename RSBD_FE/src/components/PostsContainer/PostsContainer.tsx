import React from 'react';
import usePostsContainer from './utilts';
import Post from '../Post/Post';

const PostsContainer: React.FC = () => {
    const {
        posts
    } = usePostsContainer();
    
    return (
        <div className='PostsContainer'>
            {
                posts.map((element, index) => {
                    return <Post data={element} key={index}/>
                })
            }
        </div>
    )
}

export default PostsContainer;