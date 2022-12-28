import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import PostType from '../../assets/types/PostType';
import { setIsFetching, setPosts } from '../../redux/features/post-slice';
import useAppAPI from '../../hooks/useAppAPI';


const useHome = () => {
    const isFetching = useAppSelector(state => state.post.isFetching);
    const posts = useAppSelector(state => state.post.posts);
    const errors = useAppSelector(state => state.post.errors);

    const dispatch = useAppDispatch();
    const api = useAppAPI();


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
        isFetching, posts, errors
    }
}

export default useHome;