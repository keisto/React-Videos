import React from 'react'

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div
            className="flex hover:bg-red-500 hover:bg-opacity-50 p-2 rounded cursor-pointer"
            onClick={() => handleVideoSelect(video)}
        >
            <div className="overflow-hidden rounded h-24 w-24 flex-shrink-0 mr-3">
                <img
                    alt={video.snippet.title}
                    src={video.snippet.thumbnails.medium.url}
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="font-bold">{video.snippet.title}</h2>
        </div>
    )
}

export default VideoItem
