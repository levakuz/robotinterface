import React from 'react';
import ReactTimeout from 'react-timeout'

class Block extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            status: this.props.data.status,
            time: this.props.data.time,
            statusNumber: this.props.data.statusNumber,
            id: this.props.data.id,
        }
    }

    componentDidMount () {
        this.timeoutId = setTimeout(function () {
            this.setState({status:'В процессе', statusNumber:2});
        }.bind(this), 90000);
        this.timeoutId = setTimeout(function () {
            this.setState({status:'Готов', statusNumber:4});
        }.bind(this), 180000);
      } 

    render () {
        return (
            <div className = 'card' >
                <p>No: <span className='number'>{this.state.id}</span></p>
                <p>status: <span className='status'>{this.state.status}</span></p>
                <p>time: <span className='time'>{this.state.time}</span></p>
                <br/>
            </div>
        );
    }
}

export default ReactTimeout(Block);