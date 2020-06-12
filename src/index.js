import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

async function fetch_json(url) {
    return await (await fetch(url)).json()
}

async function fetch_shows(page) {
    return (await fetch_json(`https://www.episodate.com/api/most-popular?page=${page}`)).tv_shows
}

function loadUrl(url) {
    window.location.href = url;
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shows: [], page: 1, loading: false }
        this.appending = false;
    }

    render() {
        return (
            <div>
                <div className="title">TV Shows</div>
                {this.state.shows.map(show => (
                    <TVShow show_name={show.name} show_img={show.image_thumbnail_path} key={show.id} show_url={show.permalink}></TVShow>
                ))}
                {this.state.loading ? (<div className="loader"></div>) : <div></div>}
            </div>
        )
    }

    appendShows() {
        if (!this.appending) {
            this.appending = true;
            this.setState({ loading: true })
            fetch_shows(this.state.page).then(shows => {
                this.setState({ loading: false, shows: this.state.shows.concat(shows), page: this.state.page + 1 })
                this.appending = false;
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
                this.appendShows();
            }
        });
        this.appendShows();
    }
}

class TVShow extends React.Component {
    render() {
        return (
            <div className="TVShow">
                <img src={this.props.show_img} alt={this.props.show_name} title={this.props.show_name} onClick={() => loadUrl(`https://www.episodate.com/tv-show/${this.props.show_url}`)} width="125" height="125" />
                <div className="ShowName">{this.props.show_name}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
