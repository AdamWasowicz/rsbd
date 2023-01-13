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
        try {
            const response = await apiAxiosClient.get<PostType>(endpoints.getPostFromRegionById(regionId, id));
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
        
    }

    const deletePost = async (post: deletePostDTO): Promise<boolean> => {
        try {
            const response = await apiAxiosClient.delete<boolean>(endpoints.deletePost, {
                data: post
            })
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
        
    }

    const postPost = async (post: postPostDTO): Promise<PostType> => {
        try {
            const response = await apiAxiosClient.post<PostType>(endpoints.postPost, post);
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
    }

    const postExamplePostToRegion = async (regionId: regionIdType): Promise<PostType> => {
        try {
            const response = await apiAxiosClient.post<PostType>(endpoints.postExamplePostToRegion(regionId));
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }

    }

    const patchPost = async (post: patchPostDTO): Promise<PostType> => {
        try {
            const response = await apiAxiosClient.patch<PostType>(endpoints.patchPost, post);
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
    }

    const getPrimaryServerStatusFromRegion = async (regionId: regionIdType): Promise<boolean> => {
        try {
            const response = await apiAxiosClient.get<boolean>(endpoints.getPrimaryServerStatusFromRegion(regionId));
            return response.data;
        }
        catch (error) {
            return false;
        }
    }

    const getSecondaryServerStatusFromRegion = async (regionId: regionIdType): Promise<boolean> => {
        try {
            const response = await apiAxiosClient.get<boolean>(endpoints.getSecondaryServerStatusFromRegion(regionId));
            return response.data;
        }
        catch (error) {
            return false;
        }
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