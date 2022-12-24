import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useAPI from '../../hooks/useAppAPI';
import PostType from '../../assets/types/PostType';
import { setIsFetching, setPosts } from '../../redux/features/post-slice';


const usePostsContainer = () => {
    const posts = useAppSelector(state => state.post.posts);
    const api = useAPI();
    const dispatch = useAppDispatch();

    const [isWorking, setIsWorking] = useState<boolean>(false);

    const handleSetIsWorking = (value: boolean) => {
        setIsWorking(value);
    } 

    useEffect(() => {
        dispatch(setIsFetching(true))

        api.getAllRegionsPosts()
            .then((data: PostType[]) => {
                dispatch(setPosts(data));
            })
            .finally(() => {
                dispatch(setIsFetching(false))
            });
    }, [])


    return {
        posts, handleSetIsWorking, isWorking
    }
}

export default usePostsContainer;