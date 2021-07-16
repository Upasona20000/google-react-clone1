import {useState,useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY="6da68d082baccf19a";

const useGoogleSearch=(term)=> {
    const [data,setData]=useState(null);

useEffect(() => {

const fetchData=async()=>{
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
    .then(res=>res.json())  //when api connects, then convert it to .json
    .then(result=>{
        setData(result)
    })
}

fetchData();
},[term])  //term is a data layer variable

return {data}
};

export default useGoogleSearch
