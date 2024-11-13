import { useEffect, useRef } from "react"

const useDebounce = (callback,delay)=>{
    const timeOutIDRef = useRef(null);

    useEffect(()=>{
        return ()=>{
            if(timeOutIDRef.current){
                clearTimeout(timeOutIDRef.current)
            }
        }
    },[])

    const debouncedCallback = (...args)=>{
        if(timeOutIDRef.current){
            clearTimeout(timeOutIDRef.current) 
        }
        

        timeOutIDRef.current = setTimeout(()=>{
            callback(...args)
        }, delay)
    }
    return debouncedCallback
}

export default useDebounce; 