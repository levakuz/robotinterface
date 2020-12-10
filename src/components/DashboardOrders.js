
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import ItemForm from './ItemForm';
import Card from 'react-bootstrap/Card';
import CreateOrder from "./CreateOrder";
import UpdateRfidModalForm from "./UpdateRfidModalForm";
import Button from 'react-bootstrap/Button';

import {sendData} from '../actions/socket';

class DashboardOrders extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: this.props.item.rfid,
            list: this.props.list
        }
        this.save = this.save.bind(this)
        // this.updateStatusToInDelivery = this.updateStatusToInDelivery.bind(null,item)
    }
    componentDidMount(){
        const q = 1;
        this.props.updateListOfOrders(q);
    }
    change(item){
        const order = item.order;
        const status = String(Number(item.status) + 1);
        const data = {
            order: order,
            status: status,
            key: 'EditStatus'
        };
        this.props.create(data);
    }
    save(){
        const rfid = this.getRFID.value;
        const order = this.getOrder.value;
        const cashbox = this.getCashbox.value;
        const status = '1';
        const data = {
            cashbox: cashbox,
            rfid: rfid,
            order: order,
            status: status,
            key: 'MakeNew'
        };
        this.props.create(data);
    }

    updateStatusToInDelivery = (item) =>{
        const order = item.order; 
        const status = item.status;
        const data = {
            order: order,
            status: '4',
            key: 'EditStatus'
        };
        this.props.create(data);
    }
    render(){
        let orders1 = this.props.list.filter(item => item.status === '1'
            )
        let orders2 = this.props.list.filter(item => item.status === '2'
        )
        let orders3 = this.props.list.filter(item => item.status === '3'
        )
        let orders4 = this.props.list.filter(item => item.status === '4'
        )
        let orders5 = this.props.list.filter(item => item.status === '5'
        )

        return(
        <div className='container'>

            <br/>
            
            <h5>Принятые</h5>

            <div className='row'>
                {orders1.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                    <Card body className="text-center">
                        <p>Заказ: {item.order}</p>
                        { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p><UpdateRfidModalForm item = {item}/></div>}
                    </Card>
                </div>)}
            </div>

            <h5>В процессе</h5>

            <div className='row'>
                {orders2.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                    <Card body className="text-center">
                        <p>Заказ: {item.order}</p>
                        { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p><UpdateRfidModalForm item = {item}/></div>}
                    </Card>
                </div>)}
            </div>
                    

            <h5>Готовы</h5>

            <div className='row'>
                {orders3.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                    <Card body className="text-center">
                        <p>Заказ: {item.order}</p>
                        { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p><UpdateRfidModalForm item = {item}/></div>}
                        {/* { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p></div>}
                        <Button variant="primary" type="submit" item={item} onClick = {this.updateStatusToInDelivery.bind(null,item)}>Перевести в статус В доставке</Button> */}
                    </Card>
                </div>)}
            </div>

            <h5>В доставке</h5>

            <div className='row'>
                {orders4.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                    <Card body className="text-center">
                        <p>Заказ: {item.order}</p>
                        { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p></div>}
                    </Card>
                </div>)}
            </div>
            
            <h5>Выполнен</h5>

            <div className='row'>
                {orders5.map(item => 
                <div className='col-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                    <Card body className="text-center">
                        <p>Заказ: {item.order}</p>
                        { (item.table) ? <p>Cтол: {item.table}</p> : <div><p>Cтол: не назначен</p></div>}
                        { (item.rfid) ? <p>RFID: {item.rfid}</p> : <div><p>RFID: не назначен</p><UpdateRfidModalForm item = {item}/></div>}
                    </Card>
                </div>)}
            </div>

            <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardOrders);
