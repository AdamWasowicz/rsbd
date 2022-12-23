import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import useAPI from '../../hooks/useAPI';


const usePostsContainer = () => {
    const posts = useAppSelector(state => state.post.posts);
    const api = useAPI();

    useEffect(() => {
        api.fetchAllRegionData(true);
    }, [])


    return {
        posts, 
    }
}

export default usePostsContainer;