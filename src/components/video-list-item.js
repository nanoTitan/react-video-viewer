import React from 'react';
import '../styles/styles.scss';

const VideoListItem = ({video, onVideoSelect}) => {
    if(!video) {
        return (<div>Loading...</div>);
    }

    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left video-item">
                    <img className="media-object" src={imageUrl} alt=""/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;