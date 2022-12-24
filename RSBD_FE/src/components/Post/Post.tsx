import React from 'react';
import PostType from '../../assets/types/PostType';
import usePost from './utils';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare as editIcon, faTrash as deleteIcon } from '@fortawesome/free-solid-svg-icons'


interface PostProps {
    data: PostType
}

const Post: React.FC<PostProps> = (props) => {
    const {
        getHeaderClass, getFormatedDate,
        handlePostDeletion
    } = usePost(props.data);

    return (
        <div className='Post'>
            <div className={getHeaderClass()}>
                { props.data.regionId.toUpperCase() }
            </div>

            <div className='ControlsContainer'>
                <div 
                    className='Control Delete'
                    onClick={handlePostDeletion}
                    >
                    <FontAwesomeIcon icon={deleteIcon}/>
                </div>
                
                <div className='Control Edit'>
                    <FontAwesomeIcon icon={editIcon}/>
                </div>
            </div>

            <div className='Data'>
                <div className='Field Date'>
                    {getFormatedDate()}      
                </div>

                <div className='Field Email'>
                    {props.data.email}      
                </div>

                <div className='Field'>
                    {props.data.textContent}      
                </div>
            </div>
        </div>
    )
}

export default Post;