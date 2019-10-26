import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'
import { Container, Row, Col } from 'reactstrap';

class Player extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <img src='FaithTechRadio.png' alt="logo" className="fit-image" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src={this.props.playControlImage + ".gif"}
                            alt="play/pause"
                            onClick={() => { this.props.togglePlaying() }}
                            fluid
                        />
                        <FilePlayer
                            url={this.props.streamUrl} //http://xstreamer.galcom.org:8000/GalcomCanada
                            playing={this.props.playing}
                            config={{
                                file: {
                                    forceAudio: true,
                                    autoplay: true
                                }
                            }}
                            onPlay={() => { this.props.onStartPlaying() }}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Player;
