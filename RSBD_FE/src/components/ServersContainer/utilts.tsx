import React from 'react';
import { regionIdType } from '../../hooks/useAppAPI/types';
import Server from '../Server/Server';


const useServersContainer = () => {
    const serverList: {regionId: regionIdType, isPrimary: boolean}[] = [
        { regionId: 'eu', isPrimary: true },
        { regionId: 'eu', isPrimary: false },
        { regionId: 'us', isPrimary: true },
        { regionId: 'us', isPrimary: false },
        { regionId: 'as', isPrimary: true },
        { regionId: 'as', isPrimary: false },
    ]

    const getServersComponents = (): JSX.Element[] => {
        const servers =  serverList.map((element, index) => {
            return <Server 
                regionId={element.regionId}
                isPrimary={element.isPrimary}
                key={index}
                />
        })

        return servers;
    }


    

    return {
        serverList, getServersComponents
    }
}

export default useServersContainer;