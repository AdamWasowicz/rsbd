import React, { ChangeEvent, useState} from 'react';
import { postPostDTO, regionIdType } from '../../hooks/useAppAPI/types';
import useAppAPI, { Validation } from '../../hooks/useAppAPI';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addPost, setIsFetching } from '../../redux/features/post-slice';
import { useNavigate } from 'react-router';

const useCreatePostForm = () => {
    enum Regions {
        NONE = 0,
        EU = 1,
        US = 2,
        AS = 3,
    }

    const validation = Validation();
    const dispatch = useAppDispatch();
    const apiClient = useAppAPI();
    const navigation = useNavigate();
    const isFetching = useAppSelector(state => state.post.isFetching);


    const [selectedRegion, setSelectedRegion] = useState<number>(Regions.NONE);
    const [selectedRegionErrors, setSelectedRegionErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("");
    const [emailErrors, setEmailErrors] = useState<string[]>([]);
    const [textContent, setTextContent] = useState<string>("")
    const [textContentErrors, setTextContentErrors] = useState<string[]>([]);


    // Handlers
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const handleTextContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextContent(event.currentTarget.value);
    }

    const handleClickEU = () => {
        if (selectedRegion != Regions.EU) {
            setSelectedRegion(Regions.EU);
        }
        else {
            setSelectedRegion(Regions.NONE);
        }
    }

    const handleClickUS = () => {
        if (selectedRegion != Regions.US) {
            setSelectedRegion(Regions.US);
        }
        else {
            setSelectedRegion(Regions.NONE);
        }
    }

    const handleClickAS = () => {
        if (selectedRegion != Regions.AS) {
            setSelectedRegion(Regions.AS);
        }
        else {
            setSelectedRegion(Regions.NONE);
        }
    }

    const handleSubmitButtonClick = async () => {
        if (validateForm() == false) {
            return;
        }

        dispatch(setIsFetching(true));

        const dto: postPostDTO = {
            email: email,
            textContent: textContent,
            regionId: regionsToRegionId(selectedRegion)
        }
        apiClient.postPost(dto)
            .then((response) => {
                dispatch(addPost(response));
                alert('Success')
                navigation('/');
            })
            .catch(() => {
                alert('Error occured')
            })
            .finally(() => {
                dispatch(setIsFetching(false));
            })

    }

    // Functions
    const isRegionSelected = (regionId: regionIdType): boolean => {
        if (regionId == 'eu') {
            if (selectedRegion == Regions.EU)
                return true;
            
            return false;
        }
        else if (regionId == 'us') {
            if (selectedRegion == Regions.US)
                return true;
            
            return false;
        }
        else if (regionId == 'as') {
            if (selectedRegion == Regions.AS)
                return true;

            return false;
        }
    }

    const validateForm = (): boolean => {
        let validationResult: boolean = true;

        const vSelectedRegion = validateSelectedRegion();
        setSelectedRegionErrors(vSelectedRegion);
        if (vSelectedRegion.length > 0) {
            validationResult = false;
        }

        const vEmail: string[] = validation.validateEmail(email);
        setEmailErrors(vEmail);
        if (vEmail.length > 0) {
            validationResult = false;
        }

        const vTextContent: string[] = validation.validateTextContent(textContent);
        setTextContentErrors(vTextContent);
        if (vTextContent.length > 0) {
            validationResult = false;
        }

        return validationResult;
    }

    const validateSelectedRegion = (): string[] => {
        let validationResult: string[] = [];

        if (selectedRegion == Regions.NONE) {
            validationResult = ['Region must be selected', ...validationResult]
        }

        return validationResult;
    } 

    const regionsToRegionId = (value: number): regionIdType => {
        switch (value) {
            case Regions.EU:
                return 'eu';
            case Regions.US:
                return 'us';
            case Regions.AS:
                return 'as';
            default:
                throw new Error('Invalid region');
        }
    }



    return {
        handleClickEU, handleClickUS, handleClickAS,
        isRegionSelected,
        email, handleEmailChange,
        textContent, handleTextContentChange,
        handleSubmitButtonClick,
        emailErrors, textContentErrors,
        selectedRegionErrors,
        isFetching
    }
}

export default useCreatePostForm;