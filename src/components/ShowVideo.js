import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../helpers'; 

// Component to manage and render the video wrapper on the Home Page. 
class ShowVideo extends React.Component {

    render() {
        let thumbnails = null;
        if(this.props.snippet.thumbnails && this.props.snippet.thumbnails.high){
            thumbnails = <img className="video-wrapper__poster" src={this.props.snippet.thumbnails.high.url} alt={`${this.props.snippet.title} video poster`}  />;
        }
        return (
            <article className="video-wrapper" tabIndex="0">
                <Link 
                    className="video-wrapper__link"
                    to={{
                        pathname: `/video/${this.props.snippet.resourceId.videoId}`,
                        state: { 
                            id: this.props.snippet.resourceId.videoId,
                            title: this.props.snippet.title,
                            description: this.props.snippet.description,
                            date: formatDate(this.props.snippet.publishedAt)
                        }
                    }} >
                    <section className="video-wrapper__thumbnail">
                        {thumbnails}
                        <div className="video-wrapper__title">
                            <h1>{this.props.snippet.title}</h1>
                            <div className="video-wrapper__play">
                                <img src='../img/play_button.svg' alt={`Play Button for video ${this.props.snippet.title}`}/>
                            </div>
                        </div>
                    </section>
                </Link>
                <section className="video-wrapper__description-wrap">
                    <p className="video-wrapper__date">Published on {formatDate(this.props.snippet.publishedAt)}</p>
                    <p className="video-wrapper__description">{this.props.snippet.description}</p>
                </section>
            </article>
        );
    }
}

export default ShowVideo;