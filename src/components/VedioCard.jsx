import React from 'react'
import { abbreviateNumber  } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import {BsFillCheckCircleFill} from "react-icons/bs"
import VideoLength from '../shared/VideoLength'
const VedioCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-50 md:h-45 md:rounded-xl overflow-hidden rounded-xl'>
          <img src={video?.thumbnails[0]?.url} alt="Video" className='h-full w-full object-cover' />
       {video?.lengthSeconds && (
        <VideoLength time={video?.lengthSeconds}/>
       )}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img src={video?.author?.avatar[0]?.url} alt="" />
            </div>
          </div>

        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">
            {video?.title}
          </span>

          <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">{video?.author?.title}
          {video?.author?.badges[0]?.type==="OFFICIAL_ARTIST_CHANNEL"&& (
            <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1 hover:cursor-pointer'/>
          )}
          </span>
          <div className=" flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views,0)} views`}</span>
            <div className="ml-2 relative top-[-3px] mr-1 font-bold text-white/[0.7]  "> .  </div>
            <span className='truncate'>{video?.publishedTimeText} </span>
          </div>

        </div>

        </div>

      </div>
    </Link>
  )
}

export default VedioCard