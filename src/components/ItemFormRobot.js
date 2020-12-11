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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let id = e.target.id; 
        let robot = this.props.robot;
        console.log(this.props.robot)
        if (robot === 0) {
            alert('не выбран робот')
        } else {

            if (this.state.checked === false){
                let id = e.target.id; 
                let robot = this.props.robot;
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



    render(){
        return(
        
        <Card body className="text-center">

            <Form>

            <Form.Group>
                <p>Заказ: {this.props.item.order}</p>

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


});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);