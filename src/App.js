import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = "AIzaSyBHzC35bTuD5Zidr6MzCsa4VKHy0YLMlp8";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
