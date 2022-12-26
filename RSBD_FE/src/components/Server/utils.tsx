import React, { useEffect, useState } from 'react';
import { ServerProps } from './Server';
import useAppAPI from '../../hooks/useAppAPI';


const useServer = (props: ServerProps) => {
    const apiClient = useAppAPI();
    const timeInterval: number = 6000;
    let timeout = setTimeout(() => {
    }, timeInterval)

    const [status, setStatus] = useState<boolean>(false);
    const [shouldCheckStatus, setShouldCheckStatus] = useState<boolean>(true)


    const getStatus = async () => {
        let statusFromAPI: boolean = false;
        setShouldCheckStatus(false);

        if (props.isPrimary == true) 
            statusFromAPI = await apiClient.getPrimaryServerStatusFromRegion(props.regionId)
        else 
            statusFromAPI = await apiClient.getSecondaryServerStatusFromRegion(props.regionId)
        
        setStatus(statusFromAPI);


        timeout = setTimeout(() => {
            setShouldCheckStatus(true);
        }, timeInterval)
    }


    useEffect(() => {
        if (shouldCheckStatus == true)
            getStatus();

        return () => clearTimeout(timeout);
    }, [shouldCheckStatus])



    return {
        status
    }
}

export default useServer;