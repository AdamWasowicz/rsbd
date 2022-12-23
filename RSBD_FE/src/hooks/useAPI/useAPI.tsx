import React from 'react';
import useAppHTTP from '../useAppHTTP';
import { useAppDispatch } from '../../redux/hooks';
import { addError, addPosts, clearErrors, setIsFetching, setPosts } from '../../redux/features/post-slice';
import { regionIdType } from '../useAppHTTP/types';


const useAPI = () => {
    const http = useAppHTTP();
    const dispatch = useAppDispatch();

    // Base
    const getRegion_Data = async (regionId: regionIdType, innerSetIsFetching: boolean = true) => {
        innerSetIsFetching && dispatch(setIsFetching(true));

        await http.GetPostsFromRegion(regionId)
            .then((response => {
                dispatch(addPosts(response.data))
            }))
            .finally(() => {
                innerSetIsFetching && dispatch(setIsFetching(true));
            })
    }

    const getEU_Data = async () => {
        await getRegion_Data("eu", false);
    }

    const getUS_Data = async () => {
        await getRegion_Data("us", false);
    }

    const getAS_Data = async () => {
        await getRegion_Data("as", false);
    }

    const fetchAllRegionData = async (clearData: boolean) => {
        dispatch(setIsFetching(true));
        clearData && dispatch(setPosts([]));
        dispatch(clearErrors());

        // EU
        try {
            await getEU_Data();
        }
        catch {
            dispatch(addError("Fetching EU data failed"))
        }

        // US
        try {
            await getUS_Data();
        }
        catch {
            dispatch(addError("Fetching US data failed"))
        }

        // AS
        try {
            await getAS_Data();
        }
        catch {
            dispatch(addError("Fetching AS data failed"))
        }

        dispatch(setIsFetching(false));
    }

    return {
        getEU_Data, getUS_Data, getAS_Data,
        fetchAllRegionData,
    }
}

export default useAPI;