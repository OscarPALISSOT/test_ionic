import React from "react";

function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>{children}</p>
    </div>
}

class Bonjour extends React.Component{

    render() {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}

function Welcome () {
    return <div>
        <Bonjour name="Oscar">un text</Bonjour>
        <Bonjour name="Djayan"></Bonjour>
    </div>
}

class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    tick(){
        this.setState({time: new Date()});
    }

    render() {
        return <div>
            <p>Il est {this.state.time.toLocaleTimeString()}</p>
        </div>
    }
}

export default Clock;