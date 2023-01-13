import React, { ChangeEvent, useState } from 'react';
import PostType from '../../assets/types/PostType';
import useAppAPI from '../../hooks/useAppAPI';
import { useAppDispatch } from '../../redux/hooks';
import { removePost, updatePost } from '../../redux/features/post-slice';
import { patchPostDTO } from '../../hooks/useAppAPI/types';


const usePost = (post: PostType) => {
    const apiClient = useAppAPI();
    const dispatch = useAppDispatch();

    const [isActionInProgress, setIsActionInProgress] = useState<boolean>(false);
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [e_textContent, setE_textContent] = useState<string>(post.textContent);

    
    const handleE_textContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget.value.length > 256)
            return;
        
        setE_textContent(event.currentTarget.value);
    }

    const handleSetIsActionInProgress = (value: boolean) => {
        setIsActionInProgress(value);
    }

    const switchEditMode = () => {
        setInEditMode(!inEditMode);
    }

    const handlePostDeletion = () => {
        handleSetIsActionInProgress(true);

        apiClient.deletePost(post)
            .then((value: boolean) => {
                if (value == true) 
                    dispatch(removePost(post))              
                else (value == false)
                    throw new Error();

            })
            .catch((error) => {
                alert("Couldn't delete this post")
            })
            .finally(() => {
                handleSetIsActionInProgress(false);
            })
    }

    const handlePostPatching = () => {
        if (e_textContent.length > 256) {
            alert('Text conntent cannot exced 256 characters');
            return;
        }
        
        handleSetIsActionInProgress(true);

        const dto: patchPostDTO = {
            id: post.id,
            regionId: post.regionId,
            textContent: e_textContent
        }

        apiClient.patchPost(dto)
            .then((value) => {
                console.log(value)
                if (value.creationDate != null) {
                    dispatch(updatePost({old: post, new: value}))
                    switchEditMode();
                }
                else
                    throw new Error();

            })
            .catch((error) => {
                alert("Couldn't upadate post");
            })
            .then(() => {
                handleSetIsActionInProgress(false);
            })
    }

    const getHeaderClass = (): string => {
        let header = `Header ${post.regionId.toUpperCase()}`
        return header;
    }


    const getFormatedDate = (): string => {
        const date = new Date(post.creationDate);
        const formatedDate = `${date.getDate()} / ${date.getMonth() + 1 } / ${date.getFullYear()}`;

        return formatedDate;
    }

    return {
        getHeaderClass, getFormatedDate, 
        handlePostDeletion, handlePostPatching,
        inEditMode, switchEditMode, 
        e_textContent, handleE_textContentChange,
        isActionInProgress
    }
}

export default usePost;