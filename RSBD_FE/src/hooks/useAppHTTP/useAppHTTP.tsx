import React from 'react';
import axios from 'axios';
import PostType from '../../assets/types/PostType';
import { getAllDataFromAllRegions, getPostFromRegionById, getPostsFromRegion, getPrimaryServerStatusFromRegion, getSecondaryServerStatusFromRegion, patchPost, postExamplePostToRegion, postPost } from './endpoints';
import { deletePostDTO, getAllDataFromAllRegionsDTO, patchPostDTO, postPostDTO, regionIdType } from './types';


const useAppHTTP = () => {
    const axiosClient = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })


    const GetAllDataFromAllRegions = async ()  => {
        return await axiosClient.get<getAllDataFromAllRegionsDTO>(getAllDataFromAllRegions);
    }

    const PostPost = async (post: postPostDTO) => {
        return await axiosClient.post<PostType>(postPost, post)
    }

    const PatchPost = async (post: patchPostDTO) => {
        return await axiosClient.patch<PostType>(patchPost, post);
    }

    const DeletePost = async (post: deletePostDTO) => {
        return await axiosClient.delete(patchPost, {
            data: post
        })
    }

    const PostExamplePostToRegion = async (regionId: regionIdType) => {
        return await axiosClient.post<PostType>(postExamplePostToRegion(regionId));
    }

    const GetPostsFromRegion = async (regionId: regionIdType) => {
        return await axiosClient.get<PostType[]>(getPostsFromRegion(regionId));
    }

    const GetPostFromRegionById = async (regionId: regionIdType, id: number) => {
        return await axiosClient.get<PostType>(getPostFromRegionById(regionId, id));
    }

    const GetPrimaryServerStatusFromRegion = async (regionId: regionIdType) => {
        return await axiosClient.get<boolean>(getPrimaryServerStatusFromRegion(regionId));
    }

    const GetSecondaryServerStatusFromRegion = async (regionId: regionIdType) => {
        return await axiosClient.get<boolean>(getSecondaryServerStatusFromRegion(regionId));
    }


    return {
        axiosClient,
        GetAllDataFromAllRegions, PatchPost, PostPost,
        DeletePost, PostExamplePostToRegion, GetPostsFromRegion,
        GetPostFromRegionById, GetPrimaryServerStatusFromRegion, GetSecondaryServerStatusFromRegion
    }
}

export default useAppHTTP;