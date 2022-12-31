import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFetchAS, setFetchEU, setFetchUS } from '../../redux/features/post-slice';


const usePostFilter = () => {
    const dispatch = useAppDispatch();

    const fetchEU = useAppSelector(state => state.post.fetchEU);
    const fetchUS = useAppSelector(state => state.post.fetchUS);
    const fetchAS = useAppSelector(state => state.post.fetchAS);

    
    const handleFetchEuToggle = () => {
        dispatch(setFetchEU(!fetchEU));
    } 

    const handleFetchUsToggle = () => {
        dispatch(setFetchUS(!fetchUS));
    } 

    const handleFetchAsToggle = () => {
        dispatch(setFetchAS(!fetchAS));
    } 


    return {
        fetchEU, fetchUS, fetchAS,
        handleFetchEuToggle, handleFetchUsToggle, handleFetchAsToggle
    }
}

export default usePostFilter;