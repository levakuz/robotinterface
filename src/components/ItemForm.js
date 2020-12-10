import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {sendData} from '../actions/socket';

class ItemForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list,
            rfid_data: this.props.rfid_data
        }
        this.save = this.save.bind(this)
    }

    save(){
        const id = this.props.item.id; //order
        const table = this.props.item.table;
        const status = String(Number(this.props.item.status) + 1);
        const data = {
            //order: order,
            status: status,
            table: table,
            key: 'EditStatus'
        };
        this.props.create(data);
    }
    render(){
        return(

        <Card body className="text-center">
            <p>Заказ: {this.props.item.id}</p>
            <p>Стол: {this.props.item.table}</p>
            <p>Rfid: {this.props.rfid_data.rfid}</p>
            <Button variant="primary"  onClick = {this.save}>
               применить
            </Button>
        </Card>

        );
    }
}

const mapStateToProps = state => {
    return{
        list: state.listReducer,
        rfid_data: state.rfidReducer,
    }
};
const mapDispatchToProps = dispatch => ({
    updateListOfOrders: (q) => {
        dispatch(sendData(q,'Orders'));
    },
    create: data => {
        dispatch(sendData(data,'dbWrite'));
        // dispatch(sendData(1,'Orders'));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);