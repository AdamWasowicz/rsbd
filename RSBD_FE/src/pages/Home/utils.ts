import { useNavigate } from "react-router"

export const useHome = () => {

    const navigation = useNavigate();

    const onClickHandler = () => {
        navigation("expert");
    }

    return {
        
    }
}