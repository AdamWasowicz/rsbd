import React from 'react';
import PostType from '../../assets/types/PostType';


const usePost = (post: PostType) => {

    const getHeaderClass = (): string => {
        let header = `Header ${post.regionId.toUpperCase()}`
        return header;
    }

    return {
        getHeaderClass
    }
}

export default usePost;