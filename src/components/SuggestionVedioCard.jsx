import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import VideoLength from "../shared/VideoLength"

const SuggestionVedioCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex mb-3 w-full'>
        <div className='relative  overflow-hidden h-24 lg:h-20 xl:h-24  w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800  '>

          <img src={video?.thumbnails[0]?.url} alt="Video" className='h-full w-full object-cover' />
       {video?.lengthSeconds && (
        <VideoLength time={video?.lengthSeconds}/>
       )}

        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
            {video?.title}
          </span>

          <span className="text-[12px] flex lg:text-[10px]  xl:text-[12px] font-semibold mt-2 text-white/[0.7]  items-center">{video?.author?.title}
          {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL"&& (
            <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1'/>
          )}
          </span>
          <div className=" flex text-[12px] lg:text-[10px] x:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views,0)} views`}</span>
            <div className="mx-1 relative top-[-10px] mr-1 font-bold text-white/[0.7] leading-none "> .  </div>
            <span className='truncate'>{video?.publishedTimeText} </span>
          </div>

        </div>

      </div>
    </Link>
  )
}

export default SuggestionVedioCard