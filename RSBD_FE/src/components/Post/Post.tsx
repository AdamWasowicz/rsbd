import React from 'react';
import PostType from '../../assets/types/PostType';
import usePost from './utils';
import './style.scss';

interface PostProps {
    data: PostType
}

const Post: React.FC<PostProps> = (props) => {
    const {
        getHeaderClass, 
    } = usePost(props.data);

    return (
        <div className='Post'>
            <div className={getHeaderClass()}>
                { props.data.regionId.toUpperCase() }
            </div>

            <div className='Data'>
                <h3>{props.data.creationDate}</h3>
                <h3>{props.data.email}</h3>
                <h3>{props.data.textContent}</h3>
            </div>
        </div>
    )
}

export default Post;