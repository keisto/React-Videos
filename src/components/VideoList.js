import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                handleVideoSelect={handleVideoSelect}
                video={video}
            />
        )
    })

    return (
        <div className="bg-red-600 shadow-lg p-4 rounded lg:col-span-1 space-y-1 self-start">
            {renderedList}
        </div>
    )
}

export default VideoList
