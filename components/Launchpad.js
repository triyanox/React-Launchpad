import { Component } from "react"
import DrumPad from "./Drumpad"
import Footer from "./Footer"

class Launchpad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'Let\'s JAM'
        }
    }

    handleDisplay = display => this.setState({ display })
    render() {
        const soundBank = [
            { id: 'Sample', letter: 'Q', src: 'https://samples-react.netlify.app/Sample.mp3' },
            { id: 'Kick', letter: 'W', src: 'https://samples-react.netlify.app/Kick.wav' },
            { id: 'Snare', letter: 'E', src: 'https://samples-react.netlify.app/Snare.wav' },
            { id: 'Clap', letter: 'A', src: 'https://samples-react.netlify.app/Clap.wav' },
            { id: 'Rim', letter: 'S', src: 'https://samples-react.netlify.app/Rim.wav' },
            { id: 'O-Hat', letter: 'D', src: 'https://samples-react.netlify.app/O-Hat.mp3' },
            { id: 'C-Hat', letter: 'Z', src: 'https://samples-react.netlify.app/C-Hat.wav' },
            { id: '808', letter: 'X', src: 'https://samples-react.netlify.app/808.mp3' },
            { id: 'Snap', letter: 'C', src: 'https://samples-react.netlify.app/Snap.wav' },
        ]

        return (
            <div id='drum-machine' className="container">
                <div class='box'>
                    <div class='wave'></div>
                </div>
                <div id='display' className="display">{this.state.display}</div>
                <div id='drum-pads' className="pad" >{soundBank.map(sound => (
                    <DrumPad
                        className="button"
                        key={sound.id}
                        id={sound.id}
                        letter={sound.letter}
                        src={sound.src}
                        handleDisplay={this.handleDisplay}
                    />
                ))}</div>
                <Footer />
            </div>
        )
    }
}

export default Launchpad;