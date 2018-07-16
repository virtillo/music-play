import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

// Component for the Video Page.
class Video extends React.Component{
    state = {
        id: '',
        title: '',
        description: '',
        date: '',
        currentPage: 0,
        totalPages: 0
    }

    componentWillMount() {
        if(this.props.location.state){
            this.setState({
                id: this.props.location.state.id,
                title: this.props.location.state.title,
                description: this.props.location.state.description,
                date: this.props.location.state.date,
            });
        }
        else{
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div>
                <Header />
                <div className="video-details">
                    <article className="video-details__wrapper content-wrapper">
                        <section className="video-details__embed">
                            <div className="video-details__file">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/X0qwQqwKLlM?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>    
                        </section>    
                        <section className="video-details__description">
                            <h1>{this.state.title}</h1>
                            <h4>{this.state.date}</h4>
                            <p>{this.state.description}</p>
                            <Link to='/' className="back-btn">
                                <img src="../img/back_arrow.png" alt="Go Back to Video Channel List"/>
                                <span>Back to list</span>
                            </Link>
                        </section>
                    </article>
                </div>
            </div>
        );
    }
};

export default Video;