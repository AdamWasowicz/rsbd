import React from 'react';
import PostType from '../../assets/types/PostType';
import usePost from './utils';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPenToSquare as editIcon, 
    faTrash as deleteIcon, 
    faFloppyDisk as saveIcon
 } from '@fortawesome/free-solid-svg-icons';
 import ReactLoading from 'react-loading';



interface PostProps {
    data: PostType
}

const Post: React.FC<PostProps> = (props) => {
    const {
        getHeaderClass, getFormatedDate,
        handlePostDeletion, handlePostPatching,
        inEditMode, switchEditMode, 
        e_textContent, handleE_textContentChange,
        isActionInProgress
    } = usePost(props.data);


    if (props.data == null)
        return (<></>)

    
    return (
        <div className='Post'>
            {
                isActionInProgress &&
                <div className='Overlay'>
                     <div className='Cover'/>

                     <ReactLoading 
                            type={'bubbles'} 
                            height={'50%'} 
                            color={'#2592eb'}
                            width={'50%'} 
                            className='Loader'
                            />
                </div>
            }

            <div className={getHeaderClass()}>
                { props.data.regionId.toUpperCase() }
            </div>

            <div className='ControlsContainer'>
                {
                    inEditMode == false &&
                    <div 
                        className='Control Delete'
                        onClick={handlePostDeletion}
                    >
                        <FontAwesomeIcon icon={deleteIcon}/>
                    </div>
                }

                {
                    inEditMode == true &&
                    <div 
                        className='Control Save'
                        onClick={handlePostPatching}
                    >
                        <FontAwesomeIcon icon={saveIcon}/>
                    </div>
                }
                
                <div 
                    className='Control Edit'
                    onClick={switchEditMode}
                >
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

                {
                    inEditMode == false &&
                    <div className='Field TextContent'>
                        {props.data.textContent}      
                    </div>
                }

                {
                    inEditMode == true &&
                    <div className='InputField'>
                        <textarea
                            value={e_textContent}
                            onChange={handleE_textContentChange}
                            placeholder="New Content"
                            wrap="on"
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Post;