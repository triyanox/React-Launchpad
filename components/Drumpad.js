import { Component } from "react"

class DrumPad extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
        }
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }

    render() {
        return (
            <div className="button-wrapper">
                <div className="button" id={this.props.id} onClick={this.handleClick}>
                    <h1>{this.props.letter}</h1>
                    <audio id={this.props.letter} src={this.props.src} ref={ref => this.audio = ref}></audio>
                </div>
            </div>
        )
    }
}


export default DrumPad;