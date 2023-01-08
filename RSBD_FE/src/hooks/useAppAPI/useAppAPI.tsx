import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addError, clearErrors } from '../../redux/features/post-slice';
import { deletePostDTO, patchPostDTO, postPostDTO, regionIdType } from './types';
import axios from 'axios';
import * as endpoints from './endpoints';
import PostType from '../../assets/types/PostType';


const useAppAPI = () => {
    const fetchEU = useAppSelector(state => state.post.fetchEU);
    const fetchUS = useAppSelector(state => state.post.fetchUS);
    const fetchAS = useAppSelector(state => state.post.fetchAS);

    const dispatch = useAppDispatch();


    const apiAxiosClient = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });


    // Base
    const getRegion_Data = async (regionId: regionIdType): Promise<PostType[]> => {
        let data: PostType[] = [];

        try {
            await apiAxiosClient.get<PostType[]>(endpoints.getPostsFromRegion(regionId))
                .then((response => {
                    data = response.data;
                }));
        }
        catch (error) {
            throw new Error(`Error while fetching from ${regionId.toLocaleUpperCase}`);
        }

        return data;
    }

    const getEU_Data = async (): Promise<PostType[]> => {
        return await getRegion_Data("eu");
    }

    const getUS_Data = async (): Promise<PostType[]> => {
        return await getRegion_Data("us");
    }

    const getAS_Data = async (): Promise<PostType[]> => {
        return await getRegion_Data("as");
    }

    const getAllRegionsPosts = async (): Promise<PostType[]> => {
        let data: PostType[] = [];
        dispatch(clearErrors());

        // EU
        try {
            const newData = await getEU_Data();
            data = [...newData, ...data];
        }
        catch {
            dispatch(addError("Fetching EU data failed"))
        }

        // US
        try {
            const newData = await getUS_Data();
            data = [...newData, ...data];
        }
        catch {
            dispatch(addError("Fetching US data failed"))
        }

        // AS
        try {
            const newData = await getAS_Data();
            data = [...newData, ...data];
        }
        catch {
            dispatch(addError("Fetching AS data failed"))
        }

        return data;
    }

    const getFilteredRegionsPosts = async (): Promise<PostType[]> => {
        let data: PostType[] = [];
        dispatch(clearErrors());

        // EU
        if (fetchEU) {
            try {
                const newData = await getEU_Data();
                data = [...newData, ...data];
            }
            catch {
                dispatch(addError("Fetching EU data failed"))
            }
        }

        // US 
        if (fetchUS) {
            try {
                const newData = await getUS_Data();
                data = [...newData, ...data];
            }
            catch {
                dispatch(addError("Fetching US data failed"))
            }
        }

        // AS
        if (fetchAS) {
            try {
                const newData = await getAS_Data();
                data = [...newData, ...data];
            }
            catch {
                dispatch(addError("Fetching AS data failed"))
            }
        }

        return data;
    }

    const getPostFromRegionById = async (regionId: regionIdType, id: number): Promise<PostType> => {
        const request = await apiAxiosClient.get<PostType>(endpoints.getPostFromRegionById(regionId, id));
        return request.data;
    }

    const deletePost = async (post: deletePostDTO): Promise<boolean> => {
        const request = await apiAxiosClient.delete<boolean>(endpoints.deletePost, {
            data: post
        })

        return request.data;
    }

    const postPost = async (post: postPostDTO): Promise<PostType> => {
        const request = await apiAxiosClient.post<PostType>(endpoints.postPost, post);
        return request.data;
    }

    const postExamplePostToRegion = async (regionId: regionIdType): Promise<PostType> => {
        const request = await apiAxiosClient.post<PostType>(endpoints.postExamplePostToRegion(regionId));
        return request.data;
    }

    const patchPost = async (post: patchPostDTO): Promise<PostType> => {
        const request = await apiAxiosClient.patch<PostType>(endpoints.patchPost, post);
        return request.data;
    }

    const getPrimaryServerStatusFromRegion = async (regionId: regionIdType): Promise<boolean> => {
        const request = await apiAxiosClient.get<boolean>(endpoints.getPrimaryServerStatusFromRegion(regionId));
        return request.data;
    }

    const getSecondaryServerStatusFromRegion = async (regionId: regionIdType): Promise<boolean> => {
        const request = await apiAxiosClient.get<boolean>(endpoints.getSecondaryServerStatusFromRegion(regionId));
        return request.data;
    }



    return {
        apiAxiosClient,
        getEU_Data, getUS_Data, getAS_Data,
        getAllRegionsPosts, getPostFromRegionById,
        deletePost, postPost, postExamplePostToRegion,
        patchPost,
        getPrimaryServerStatusFromRegion, getSecondaryServerStatusFromRegion,
        getFilteredRegionsPosts
    }
}

export default useAppAPI;