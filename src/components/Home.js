import React from 'react';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './Header';
import ShowVideo from './ShowVideo';

// Home controller - It handles the list of videos, loading them from the API. 
// There is a pagination control managed on the state.
// There is a page change (new API call for the next page) when the scroll reaches the bottom of the page
class Home extends React.Component {

    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    state = {
        videoList: [],
        nextPageToken: '',
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    
    componentDidMount() {
        this.getDatafromApi();
        window.addEventListener('scroll', this.handleScroll);
    }

    // Function to fetch from the API.
    getDatafromApi() {
        const videosAPI = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw&pageToken=${this.state.nextPageToken}`;
        axios.get(videosAPI).
            then(
                (response) => {
                    const videoList = this.state.videoList.concat(response.data.items);
                    this.setState({videoList: videoList,
                        nextPageToken: response.data.nextPageToken,
                        currentPage: this.state.currentPage + 1,
                        totalPages: parseInt(response.data.pageInfo.totalResults/response.data.pageInfo.resultsPerPage) + 1
                    });
                }
            );
    }
    
    // Function that handles the scroll position.
    // It makes a call to the API when the bottom of the page is reached, to bring the next page list of videos
    handleScroll() {
        let d = document.documentElement,
            offset = d.scrollTop + window.innerHeight,
            height = d.offsetHeight;

        if(offset >= height) {
            if (this.state.currentPage !== this.state.totalPages)
            {
                this.getDatafromApi();
            }  
        }
    }

    // Function to handle the search functionality thought the state
    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return(
            <main>
                <Header showSearch handleSearchTermChange={this.handleSearchTermChange} />
                <div className="home" >
                    {/* <span>{this.state.currentPage} / {this.state.totalPages}</span> */}
                    <div className="home-wrapper content-wrapper" tabIndex="0">
                        {this.state.videoList
                            .filter((video) => (`${video.snippet.title}` !== 'Deleted video') && (`${video.snippet.title}` !== 'Private video'))
                            .filter((video) => `${video.snippet.title} ${video.snippet.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
                            .map( (video) => (
                                <ShowVideo key={video.snippet.position} {...video} />
                            ))}
                    </div>    
                </div>  
            </main>
        );
    }
}


export default Home;