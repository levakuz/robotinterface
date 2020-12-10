import React from 'react';

class OrderCard extends React.Component {

    render () {
        return (
            <div className = 'card' >
                <p>No: <span className='number'>{this.props.data.number}</span></p>
                <p>status: <span className='status'>{this.props.data.status}</span></p>
                <p>rfid: <span className='status'></span></p>
                <br/>
            </div>
        );
    }
}

export default OrderCard;