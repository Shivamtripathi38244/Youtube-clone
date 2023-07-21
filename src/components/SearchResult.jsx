import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import {fetchdatafromapi} from "../utils/api"
import { Context } from "../context/contextapi"
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";


const SearchResult = () => {
  const [result,setresult]=useState([]);
  const {searchQuery} =useParams();
  const {setloading} =useContext(Context);

  useEffect(()=>{
    
   searchResult();
  },[searchQuery]);

  const searchResult=()=>{
    setloading(true);
    fetchdatafromapi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res);
      setresult(res?.contents);
      setloading(false);
    });
  };
  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav/>
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black '>
        <div className='grid grid-col-1 gap-2 p-5'>
        {
          result.map((item)=>{
            if(item?.type!=="video")return false;
            let video=item?.video;
          return (
            <SearchResultVideoCard key={video?.videoId} video={video}/>
          );
          })
        }
        </div>
      </div>

    </div>
  )
};

export default SearchResult