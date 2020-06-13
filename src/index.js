import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

async function fetch_json(url) {
    return await (await fetch(url)).json()
}

async function fetch_shows(page) {
    return (await fetch_json(`https://www.episodate.com/api/most-popular?page=${page}`)).tv_shows
}

async function fetch_show_details(show_link) {
    return (await fetch_json(`https://www.episodate.com/api/show-details?q=${show_link}`)).tvShow;
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={TVShowsList} />
                <Route exact path="/show/:show_link" component={TVShowDetails} />
            </Router>
        )
    }
}

var savedState;
var scrollPos = 0;

class TVShowsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shows: [], page: 1, loading: false };
        this.appending = false;
        this.mounted = false;
    }

    render() {
        return (
            <div>
                <div className="title">TV Shows</div>
                {this.state.shows.map(show => (
                    <TVShow history={this.props.history} show_name={show.name} show_img={show.image_thumbnail_path} key={show.id} show_link={show.permalink}></TVShow>
                ))}
                {this.state.loading ? (<div className="loader"></div>) : <div></div>}
            </div>
        )
    }

    appendShows() {
        if (!this.appending && this.mounted) {
            this.appending = true;
            this.setState({ loading: true })
            fetch_shows(this.state.page).then(shows => {
                if (this.mounted) {
                    this.setState({ loading: false, shows: this.state.shows.concat(shows), page: this.state.page + 1 })
                    this.appending = false;
                }
            })
        }
    }

    componentDidMount() {
        this.mounted = true;
        window.addEventListener('scroll', () => {
            if ((document.documentElement.offsetHeight - Math.round(window.innerHeight + document.documentElement.scrollTop)) < 500) {
                this.appendShows();
            }
        });
        savedState == null ? this.appendShows() : this.setState(savedState);
        setTimeout(() => document.documentElement.scrollTop = scrollPos, 100);
    }

    componentWillUnmount() {
        this.mounted = false;
        savedState = this.state;
        scrollPos = document.documentElement.scrollTop;
    }
}

class TVShow extends React.Component {
    render() {
        return (
            <div className="TVShow ripple" onClick={() => setTimeout(() => this.props.history.push(`/show/${this.props.show_link}`), 500)}>
                <img className="shows-img" src={this.props.show_img} alt={this.props.show_name} title={this.props.show_name} />
                <div className="show-name">{this.props.show_name}</div>
            </div>
        )
    }
}

class TVShowDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, name: null, description: null, img: null }
        this.mounted = false;
    }

    render() {
        if (this.state.loading)
            return (<div className="loader"></div>)
        else {
            return (
                <div>
                    <div className="title">{this.state.name}</div>
                    <div style={{ margin: "auto", textAlign: "center" }}> <img className="show-details-img" src={this.state.img} alt={this.state.name} title={this.state.name} /></div>
                    <div className="description"><p dangerouslySetInnerHTML={{ __html: this.state.description }}></p></div>
                </div>
            )
        }
    }

    componentDidMount() {
        this.mounted = true;
        fetch_show_details(this.props.match.params.show_link).then((details) => {
            if (this.mounted) {
                this.setState({ loading: false, name: details.name, description: details.description, img: details.image_thumbnail_path })
            }
        })
    }

    componentWillUnmount() {
        this.mounted = false;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
