import React from 'react';


const useAppAPI_Validation = () => {
    const validateEmail = (email: string): string[] => {
        let validationResult: string[] = [];

        let regexResult =  email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

        if (!regexResult) {
            validationResult = ['Email is invalid', ...validationResult]
        }

        return validationResult;
    }

    const validateTextContent = (textContent: string): string[] => {
        let validationResult: string[] = [];
        const minCharacters: number = 1;
        const maxCharacters: number = 256;

        if (textContent.length < minCharacters)
            validationResult = [`Text can't be empty`, ...validationResult];
        

        if (textContent.length > maxCharacters)
            validationResult = [`Text must be max ${maxCharacters}`, ...validationResult];
        
        return validationResult;
    }

    return {
        validateEmail, validateTextContent
    }
}

export default useAppAPI_Validation;