import { regionIdType } from "./types";

// Strings
export const postPost: string = '/api/compact/post';
export const patchPost: string = 'api/compact/post';
export const deletePost: string = 'api/compact/post';
export const getAllDataFromAllRegions: string = 'api/compact/post';

// Functions
export const postExamplePostToRegion = 
    (regionId: regionIdType) => `/api/compact/post/example/${regionId}`;

export const getPostsFromRegion = 
    (regionId: regionIdType) => `/api/compact/post/${regionId}`;
    
export const getPostFromRegionById = 
    (regionId: regionIdType, id: number) => `/api/compact/post/${regionId}/${id}`;

export const getPrimaryServerStatusFromRegion = 
    (regionId: regionIdType) => `/api/compact/post/${regionId}/status/primary`;

export const getSecondaryServerStatusFromRegion = 
    (regionId: regionIdType) => `/api/compact/post/${regionId}/status/secondary`;