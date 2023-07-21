import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from 'js-abbreviation-number';
import { fetchdatafromapi } from "../utils/api";
import { Context } from '../context/contextapi';
import SuggestionVedioCard from "./SuggestionVedioCard"

const VedioDetails = () => {
  const [video, setvideo] = useState();
  const [relatedVideos, setrelatedVideos] = useState();
  const { id } = useParams();
  const { setloading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchvideodetails();
    fetchrelatedvideos();
  }, [id])

  const fetchvideodetails = () => {
    setloading(true);
    fetchdatafromapi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setvideo(res);
      setloading(false);
    })
  }
  const fetchrelatedvideos = () => {
    setloading(true);
    fetchdatafromapi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setrelatedVideos(res);
      setloading(false);
    })
  }
  return (
    <div className="flex justify-center  flex-row h-[calc(100%-56px)] bg-black   ">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">


        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto ">
          <div className="md:h-[400px] h-[250px] lg:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 mt-0 ">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls
              playing={true}
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}>
            </ReactPlayer>
          </div>

          <div className="text-white font-bold mt-4 md:text-xl line-clamp-2">{video?.title}</div>



          <div className="flex justify-between flex-col md:flex-row mt-4">

            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img src={video?.author?.avatar[0]?.url} alt="Avatar" className='h-full w-full object-cover' />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-white text-md text-sm flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                  )}
                </div>
                <div className="text-white/[0.5] text-sm ">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
              
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] hover:cursor-pointer">
               <AiOutlineLike className='text-xl text-whitem mr-2 '/>
               <span>{`${abbreviateNumber(video?.stats?.likes,0)} Likes`}</span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-3 hover:cursor-pointer">
               <AiOutlineLike className='text-xl text-whitem mr-2'/>
               <span>{`${abbreviateNumber(video?.stats?.views,0)} views`}</span>
              </div>
            </div>

          </div>
         
        </div>

        <div className="flex flex-col py-6 overflow-y-auto lg:w-[350px] xl:w-[400px]">
         {relatedVideos?.contents?.map((item,index)=>{
          if(!item.type==="video")return false;
           return(
            <SuggestionVedioCard  key={index} video={item.video}/>
          )
         })}
        </div>

      </div>
    </div>
  )
}

export default VedioDetails