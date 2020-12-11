import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemFormRobot';
import Button from 'react-bootstrap/Button';

import {sendData} from '../actions/socket';
import Form from 'react-bootstrap/Form';
import { addToItems, removeFromItems } from '../actions/checkedItems';


class Orders extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list,
            start_point: this.props.start_point,
            checkedItems: this.props.checkedItems,
            robot:''
        }
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        const q = 1;
        this.props.updateListOfOrders(q);
        this.props.updateListOfRobots(q);

    }

    save(){
        const q = 1;
        let checkedItems = this.props.checkedItems;
        this.props.send(checkedItems);
        this.props.updateListOfOrders(q);
    }

    handleChange() {
        let robot = this.getRobot.value;
        this.setState({robot:this.getRobot.value})
        this.props.sendRobotID(robot);
    }

    render(){
        let orders3 = this.props.list.filter(item => item.status === '3'
        );
        let start_point = this.state.start_point
        console.log("here")
        console.log(start_point)
        return(
        <div className='container'>
            <br/>
            <h5>Выберите робота</h5>
            <div className='input'>
                <Form.Control as="select" ref={input => (this.getRobot = input)} onChange={this.handleChange} >
                    {console.log(this.props.robots)}
                    <option selected disabled value={0}>ID робота</option>
                    {/* <option value={1} >1 robot</option>
                    <option value={2}>2 robot</option> */}
                    {this.props.robots.map(robot => (
                        <option value={robot.robot_id}>{robot.robot_id}</option>
                        )
                    )}
                </Form.Control>
            </div>
           
           <div>
            
        
            <h5>Готовые заказы</h5>


            <div className='row'>
                {orders3.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3'>
                    <ItemForm item={item} robot={(this.state.robot) ? this.state.robot : []}/> 
                    
                </div>)}
            </div>
            <div className='row justify-content-center'   >
                
                <Button onClick={this.save} href="/qr">Отправить</Button>
            </div>
            </div> 
            <br/> 
        </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        list: state.listReducer,
        start_point: state.startpointReducer,
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
    },
    sendRobotID: id => {
        dispatch(sendData(id,'set_robot_status'));
    },
});




export default connect(mapStateToProps, mapDispatchToProps)(Orders);