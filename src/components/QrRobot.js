import React, {Component} from 'react'
import qr from '../images/robotQR.png'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {sendData} from '../actions/socket';

 class QrRobot extends Component{
    constructor(props){
        super(props)
        this.state = {
            start_point: this.props.start_point,
            checkedItems: this.props.checkedItems,
            robot:''
        }
        this.q = 'True'

    }
    
    
    render(){
        console.log(this.state.start_point)
        return(
        <div>
            <div align='center' >
                <img src = {qr} height={500} width={500} />
            </div>
            <div align='center' style={{marginTop: 20}}>
            <Button onClick = {this.props.sendBack} href="/robot"> Отправить робота назад</Button>
            </div>
        </div>
        )
    }

}
const mapStateToProps = state => {
    return{
        start_point: state.startpointReducer,
        checkedItems: state.checkedItemsReducer
    }
};
const mapDispatchToProps = dispatch => ({
        sendBack: id => {
            dispatch(sendData("True",'robot_delivery_order'));
        },
    
    });

export default connect(mapStateToProps,mapDispatchToProps)(QrRobot);