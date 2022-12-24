import React, { useState } from 'react';
import PostType from '../../assets/types/PostType';
import useAppAPI from '../../hooks/useAppAPI';
import { useAppDispatch } from '../../redux/hooks';
import { removePost } from '../../redux/features/post-slice';


const usePost = (post: PostType) => {
    const apiClient = useAppAPI();
    const dispatch = useAppDispatch();

    const [isActionInProgress, setIsActionInProgress] = useState<boolean>(false);
    const [inEditMode, setInEditMode] = useState<boolean>(false);


    const handleSetIsActionInProgress = (value: boolean) => {
        setIsActionInProgress(value);
    }

    const handleSetInEditMode = (value: boolean) => {
        setInEditMode(value);
    }

    const handlePostDeletion = () => {
        handleSetIsActionInProgress(true);

        apiClient.deletePost(post)
            .then((value: boolean) => {
                if (value == true) {
                    dispatch(removePost(post))
                }
            })
            .catch((error) => {

            })
            .finally(() => {
                handleSetIsActionInProgress(true);
            })
    }

    const getHeaderClass = (): string => {
        let header = `Header ${post.regionId.toUpperCase()}`
        return header;
    }


    const getFormatedDate = (): string => {
        const date = new Date(post.creationDate);
        const formatedDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

        return formatedDate;
    }

    return {
        getHeaderClass, getFormatedDate, 
        handlePostDeletion
    }
}

export default usePost;