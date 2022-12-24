import PostType from "../../assets/types/PostType";

export type regionIdType = 'eu' | 'us' | 'as';

export type postPostDTO = {
    regionId: regionIdType,
    email: string,
    textContent: string
};

export type patchPostDTO = {
    id: number,
    regionId: regionIdType,
    textContent: string
};

export type deletePostDTO = {
    id: number,
    regionId: regionIdType
};

export type getAllDataFromAllRegionsDTO = {
    eu_Write: PostType[],
    eu_Read: PostType[],
    us_Write: PostType[],
    us_Read: PostType[],
    as_Write: PostType[],
    as_Read: PostType[]
};