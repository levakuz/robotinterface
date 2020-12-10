import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {sendData} from '../actions/socket';

class EditOrderStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list
        }
        this.save = this.save.bind(this)
    }
    componentDidMount(){
        this.props.updateListOfOrders(1);
    }
    save(){
        const order = this.getOrder.value;
        const status = this.getStatus.value;
        const data = {
            order: order,
            status: status,
            key: 'EditStatus'
        };
        this.props.create(data);
    }
    render(){
        let items = this.props.list.map(item => <option value={item.order}>{item.order}</option>
            )
        return(

        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-7'>
                    <br/>
                    <Form>
                        
                        <Form.Group>
                            <Form.Label>Номер заказа</Form.Label>
                            <Form.Control as="select" ref={input => (this.getOrder = input)}>
                                {items}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Статус заказа</Form.Label>
                            <Form.Control as="select" ref={input => (this.getStatus = input)}>
                                <option value='1'>Принят</option>
                                <option value='2'>Готовится</option>
                                <option value='3'>Готов</option>
                                <option value='4'>В доставке</option>
                                <option value='5'>Выполнен</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" onClick = {this.save}>
                            OK
                        </Button>

                    </Form>

               </div>
            </div>
        </div> 

        );
    }
}

const mapStateToProps = state => {
    return{
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

export default connect(mapStateToProps, mapDispatchToProps)(EditOrderStatus);