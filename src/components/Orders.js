import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemFormRobot';
import Button from 'react-bootstrap/Button';

import {sendData} from '../actions/socket';

class Orders extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list,
            checkedItems: this.props.checkedItems,
        }
        this.save = this.save.bind(this);
    }
    componentDidMount(){
        const q = 1;
        this.props.updateListOfOrders(q);
        this.props.updateListOfRobots(q);
    }

    save(){
        let checkedItems = this.props.checkedItems;
        this.props.send(checkedItems);
    }
    render(){
        let orders3 = this.props.list.filter(item => item.status === '3'
        );
        return(
        <div className='container'>
            <br/>
        
            <h5>Готовые заказы</h5>

            <div className='row'>
                {orders3.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3'>
                    <ItemForm item={item} robots={(this.props.robots) ? this.props.robots : []}/>
                </div>)}
            </div>
            <div className='row justify-content-center' >
                <Button onClick={this.save} >Отправить</Button>
            </div>
            <br/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        list: state.listReducer,
        checkedItems: state.checkedItemsReducer,
        robots: state.robotsReducer
    }
};
const mapDispatchToProps = dispatch => ({
    updateListOfOrders: (q) => {
        dispatch(sendData(q,'Orders'));
    },
    send: (items) => {
        dispatch(sendData(items,'set_selected_orders'));
        dispatch(sendData(1,'Orders'));
    },
    updateListOfRobots: (q) => {
        dispatch(sendData(q,'get_robots'));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);