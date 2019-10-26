import React from 'react';
import Player from '../Components/Player'
import queryString from 'query-string'

class Radio extends React.Component {
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        this.setState({ streamUrl: values.streamUrl, logo: values.logo })
    }

    constructor(props) {
        super(props);

        const play = "&#9654;"
        const pause = "&#9208;"
        const loading = ""

        this.state = {
            playing: true,
            playbackIcon: loading,
            streamUrl: this.streamUrl,
            logo: this.logo
        };
        console.log("stream: " + this.streamUrl)

        this.togglePlaying = this.togglePlaying.bind(this);
        this.onStartPlaying = this.onStartPlaying.bind(this);
    }

    onStartPlaying() {
        this.setState({ playbackIcon: this.pause })
    }

    togglePlaying() {
        if (this.state.playing) {
            this.setState({ playing: false, playbackIcon: this.play })
        } else {
            this.setState({ playing: true, playbackIcon: this.pause })
        }
    }

    render() {
        return (
            <Player
                playing={this.state.playing}
                togglePlaying={this.togglePlaying}
                onStartPlaying={this.onStartPlaying}
                streamUrl={this.state.streamUrl}
            />
        )
    }
}

export default Radio;
