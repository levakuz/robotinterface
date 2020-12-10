import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {sendData} from '../actions/socket';

class CreateOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            rfid: this.props.item,
            label: this.props.item.label,
            list: this.props.list,
            show: false
        }
        this.save = this.save.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    componentDidMount(){
        // const q = 1;
        // this.props.updateListOfOrders(q);
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
        const order = this.getOrder.value;
        const cashbox = this.getCashbox.value;
        const status = '1';
        const data = {
            cashbox: cashbox,
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
                    <Button variant="primary" onClick={this.handleShow}> Создать заказ </Button>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create order</Modal.Title>
                    </Modal.Header> 

                    <Modal.Body>
                        <div className='row justify-content-md-center'>
                            <div className='col-12'>

                                <Form>
                                    <Form.Group>
                                        <Form.Label>Номер кассы</Form.Label>
                                        <Form.Control as="select" placeholder="Номер кассы" ref={input => (this.getCashbox = input)}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Номер RFID</Form.Label>
                                        <Form.Control type="text" placeholder="RFID" ref={input => (this.getRFID = input)} value={this.props.item.rfid}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Номер метки</Form.Label>
                                        <Form.Control type="text" placeholder="метка" ref={input => (this.getLabel = input)} value={this.props.item.number}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Номер заказа</Form.Label>
                                        <Form.Control type="text" placeholder="Номер заказа" ref={input => (this.getOrder = input)}/>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Статус заказа</Form.Label>
                                        <Form.Control type="text"  value='Принят'/>
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
        item: state.itemReducer,
        list: state.listReducer
    }
};
const mapDispatchToProps = dispatch => ({
    updateListOfOrders: (q) => {
        dispatch(sendData(q,'Orders'));
    },
    create: data => {
        dispatch(sendData(data,'dbWrite'));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);