import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import PostType from '../../assets/types/PostType';
import { setIsFetching, setPosts } from '../../redux/features/post-slice';
import useAppAPI from '../../hooks/useAppAPI';


const useHome = () => {
    const isFetching = useAppSelector(state => state.post.isFetching);
    const posts = useAppSelector(state => state.post.posts);
    const errors = useAppSelector(state => state.post.errors);
    const fetchEU = useAppSelector(state => state.post.fetchEU);
    const fetchUS = useAppSelector(state => state.post.fetchUS);
    const fetchAS = useAppSelector(state => state.post.fetchAS);

    const dispatch = useAppDispatch();
    const api = useAppAPI();

    console.log(errors);

    // Fetch data
    useEffect(() => {
        dispatch(setIsFetching(true))

        api.getFilteredRegionsPosts()
            .then((data: PostType[]) => {
                dispatch(setPosts(data));
            })
            .finally(() => {
                dispatch(setIsFetching(false))
            });
    }, [fetchEU, fetchUS, fetchAS])

    return {
        isFetching, posts, errors
    }
}

export default useHome;