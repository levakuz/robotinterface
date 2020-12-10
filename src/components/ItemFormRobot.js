import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import Form.Group from 'react-bootstrap/Form.Group';
// import Form.Label from 'react-bootstrap/FormGroup';
// import FormGroup from 'react-bootstrap/FormGroup';

import { addToItems, removeFromItems } from '../actions/checkedItems';

import {sendData} from '../actions/socket';

class ItemForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false
        }
        // this.save = this.save.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let id = e.target.id; 
        let robot = this.getRobot.value;
        if (robot == 0) {
            alert('не выбран робот')
        } else {

            if (this.state.checked === false){
                let id = e.target.id; 
                let robot = this.getRobot.value;
                let data = {
                    id: id,
                    robot: robot
                }
                this.props.addToItems(data);
            } else {
                this.props.removeFromItems(id);
            }
            (this.state.checked) ? this.setState({checked: false}) : this.setState({checked: true});

        }

    }

    handleChange() {
        let robot = this.getRobot.value;
        this.props.sendRobotID(robot);
    }


    render(){
        return(

        <Card body className="text-center">

            <Form>

            <Form.Group>
                <p>Заказ: {this.props.item.order}</p>

            </Form.Group>

            <Form.Group>
                <Form.Label>Выбрать робота</Form.Label>
                <Form.Control as="select" ref={input => (this.getRobot = input)} onChange={this.handleChange}>
                    <option selected disabled value={0}>ID робота</option>
                    {/* <option value={1} >1 robot</option>
                    <option value={2}>2 robot</option> */}
                    {this.props.robots.map(robot => (
                        <option value={robot.robot_id}>{robot.robot_id}</option>
                        )
                    )}
                </Form.Control>
            </Form.Group>
            </Form>

            <Button variant={(this.state.checked) ? 'success' : 'dark'} type="checkbox" onClick={this.handleClick} id={this.props.item.order}>{(this.state.checked) ? 'Выбрано' : 'Выбрать'}</Button>

        </Card>

        );
    }
}

const mapStateToProps = state => {
    return{
        list: state.listReducer,
        checkedItems: state.checkedItems
    }
};
const mapDispatchToProps = dispatch => ({
    addToItems: (data) => {
        // dispatch(sendData(q,'Orders'));
        dispatch(addToItems(data))
    },
    removeFromItems: id => {
        dispatch(removeFromItems(id))
    },
    sendRobotID: id => {
        dispatch(sendData(id,'set_robot_status'));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);