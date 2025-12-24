import React from "react";
class Timer extends React.Component {
    constructor() {
        super();
        this.state = { seconds: 0 };
    }
    componentDidMount() {
        console.log("It logs on first browser run ");
        this.interval = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <>
                <div>
                    <h1>Timer</h1>
                    <p>Seconds: {this.state.seconds}</p>
                    {/* <button>Stop</button> */}
                </div>
            </>
        )
    }
}
export default Timer;