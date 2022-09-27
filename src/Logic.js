import React from 'react';

class Logic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: Date(),
        }
        this.refresh = this.refresh.bind(this)
    }
    refresh() {
        this.setState({
            timer: Date()
        })
    }
    render() {
        setInterval(this.refresh, 1000)
        return (
            <>
                <h1>{this.state.timer}</h1>
            </>

        )
    }
}
export default Logic