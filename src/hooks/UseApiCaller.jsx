
import { useEffect, useState } from 'react';
import { apiBuilder } from '../constants/Constants';

/**
 *  This hook returns  data fetched from api, loading status and errors
 */
export const UseApiCaller = (endpointName, method, headers ) => {
    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);

    useEffect(() =>{
        setLoader(true);
        try {
            const endPoint = apiBuilder(endpointName);

            fetch( endPoint ,
                {method : method})
            .then(response => response.json())
            .then(data => {
                setResponse(JSON.stringify(data));
                console.log(JSON.stringify(data));
                setLoader(false);
            })
            .catch(error => {
                setLoader(false);
                setError(true);
            })
        } catch (error) {

        } finally {
            console.log("API call ended");
        }

        
    } , [])

    return {loader, response, error};
}