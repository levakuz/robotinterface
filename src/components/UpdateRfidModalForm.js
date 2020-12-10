import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {sendData} from '../actions/socket';
import {update_orders_rfid} from '../actions/list';

class UpdateRfidModalForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: this.props.item.number,
            rfid: this.props.item.rfid,
            id: this.props.item.order,
            show: false
        }
        this.save = this.save.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    
    handleShow() {
        this.setState({ show: true})
    }
    handleClose() {
        this.setState({ show: false})
    }
    save(){
        // const rfid = this.getRFID.value;
        const number = this.getLabel.value;
        const order = this.props.item.order;
        const status = '1';
        const data = {
            rfid:number,
            order: order,
            status: status,
            key: 'MakeNew'
        };
        this.props.create(data);
        this.handleClose();
    }
    render(){
        return(
            <div className='container'>
                <br/>
                <div className='row justify-content-md-center'>
                    <Button variant="primary" onClick={this.handleShow}> Добавить Rfid </Button>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Добавить Rfid метку к заказу</Modal.Title>
                    </Modal.Header> 

                    <Modal.Body>
                        <div className='row justify-content-md-center'>
                            <div className='col-12'>

                                <Form>
                                    <Form.Group>
                                        <Form.Label>Номер RFID</Form.Label>
                                        <Form.Control type="text" placeholder="RFID" ref={input => (this.getRFID = input)} value={this.props.rfid_data.rfid}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Номер метки</Form.Label>
                                        <Form.Control type="text" placeholder="метка" ref={input => (this.getLabel = input)} value={this.props.rfid_data.number}/>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Отмена
                        </Button>
                        <Button variant="primary" onClick={this.save}>
                        Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        rfid_data: state.rfidReducer,
    }
};
const mapDispatchToProps = dispatch => ({
    updateListOfOrders: (q) => {
        dispatch(sendData(q,'Orders'));
    },
    create: data => {
        dispatch(sendData(data,'dbWrite'));
        dispatch(update_orders_rfid(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRfidModalForm);