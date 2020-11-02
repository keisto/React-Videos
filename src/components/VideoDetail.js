import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="w-full lg:col-span-2 h-32 flex items-center justify-center text-gray-900 text-opacity-25 self-start">
                No Video Selected
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="w-full lg:col-span-2 self-start">
            <div className="overflow-hidden">
                <iframe
                    src={videoSrc}
                    className="w-full rounded"
                    style={{ height: '460px' }}
                    title="Video Player"
                />
            </div>

            <div className="bg-red-600 shadow-lg p-6 rounded mt-6">
                <h1 className="text-lg font-bold">{video.snippet.title}</h1>
                <p className="text-gray-900 text-opacity-75">
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
}

export default VideoDetail
