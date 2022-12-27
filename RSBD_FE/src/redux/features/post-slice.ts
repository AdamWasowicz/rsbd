import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostType from '../../assets/types/PostType';


export interface PostState {
    posts: PostType[];
    errors: string[],
    isFetching: boolean
}

const initialState: PostState = {
    posts: [],
    errors: [],
    isFetching: false
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts(state: PostState, action: PayloadAction<PostType[]>) {
            // New first
            action.payload.sort((a, b) => {
                const aDate = new Date(a.creationDate);
                const bDate = new Date(b.creationDate);

                if (aDate > bDate)
                    return -1;
                else if (aDate < bDate)
                    return 1;
                
                return 0;         
            })
            state.posts = [...action.payload];
        },

        addPost(state: PostState, action: PayloadAction<PostType>) {
            state.posts = [action.payload, ...state.posts,];
        },

        addPosts(state: PostState, action: PayloadAction<PostType[]>) {
            state.posts = [...action.payload, ...state.posts];
        },

        removePost(state: PostState, action: PayloadAction<PostType>) {
            // Find index of Post to be delted
            const index = state.posts.findIndex((element) => {
                console.log(element);
                if (element.id == action.payload.id && element.regionId == action.payload.regionId) {
                    return true;
                }
                else 
                    return false;
            });

            console.log(index);
            console.log(action.payload)

            // Filter Posts
            state.posts = state.posts.filter((_, indexOfElement) => {
                if (indexOfElement == index)
                    return false;
                else
                    return true;
            });
        },

        updatePost(state: PostState, action: PayloadAction<{old: PostType, new: PostType}>) {
            // Find index of Post to be updated
            const indexOfOld = state.posts.findIndex((element) => {
                if (element.id == action.payload.old.id && element.regionId == action.payload.old.regionId) {
                    return true;
                }
                else 
                    return false;
            });

            // Update Post
            const postsCopy = state.posts;
            postsCopy[indexOfOld] = action.payload.new;
            state.posts = postsCopy;
        },

        setErrors(state: PostState, action: PayloadAction<string[]>) {
            state.errors = action.payload;
        },

        addError(state: PostState, action: PayloadAction<string>) {
            state.errors = [action.payload, ...state.errors];
        },

        clearErrors(state: PostState) {
            state.errors = [];
        },

        setIsFetching(state: PostState, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        }
    }
})

export const {
    setPosts, addPost, removePost,
    updatePost, addPosts,
    setErrors, addError, clearErrors,
    setIsFetching,
} = postSlice.actions;


export default postSlice.reducer;