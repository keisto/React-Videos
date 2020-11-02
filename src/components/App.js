import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.handleSearchTerm('Apple')
    }

    handleSearchTerm = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div>
                <SearchBar handleFormSubmit={this.handleSearchTerm} />
                <div className="container mx-auto px-4 mt-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        videos={this.state.videos}
                        handleVideoSelect={this.handleVideoSelect}
                    />
                </div>
            </div>
        )
    }
}

export default App
