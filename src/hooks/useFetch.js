import { useState, useEffect } from "react";

export const useFetch = (url , method = 'GET') => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [options , setOptions] = useState(null)
    
    const postData = (postData)=>{
        setOptions({
            method :"POST",
            headers :{
                "content-Type":"application/json"
            },
            body:JSON.stringify(postData)
        })
    }
    
    useEffect(() => {
        
        const fetchData = async (fetchOptions) => {
            
            setIsLoading(true)
            
            try {
                const response = await fetch(url,{...fetchOptions});
                if (! response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json();
                
                setIsLoading(false)
                setError(null)
                
                setData(json)
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        }
        if(method==='GET'){
            fetchData()
        }
        if(method === 'POST' && options){
            fetchData(options)
        }
    }, [url , method , options])
    
    return { data , isLoading , error , postData }
}


