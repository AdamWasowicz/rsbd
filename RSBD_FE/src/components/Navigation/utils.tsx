import React from 'react';
import { NavigationRoute } from './types';
import { useNavigate } from 'react-router';


const useNavigation = () => {
    const navigate = useNavigate();

    const handleRedirect = (path: string) => {
        navigate(path)
    };

    const renderNavigationElement = (element: NavigationRoute, key: number): JSX.Element => {
        return (
            <div 
                key={key}
                className="Element"
                onClick={() => handleRedirect(element.route)}
                >
                    {element.caption}
            </div>
        )
    }

    return {
        renderNavigationElement
    }
}

export default useNavigation;