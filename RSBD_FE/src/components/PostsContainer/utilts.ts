import { useAppSelector } from '../../redux/hooks';


const usePostsContainer = () => {
    const posts = useAppSelector(state => state.post.posts);

    return {
        posts
    }
}

export default usePostsContainer;