import {UPDATE_ORDERS, UPDATE_ORDERS_RFID} from '../actions/list'

const list=[];

const listReducer = (state = list, action) => {
    switch(action.type) {
        case UPDATE_ORDERS: 
            return state = action.state;
        case UPDATE_ORDERS_RFID: 
            return state.map(item => { 
                if (item.order === action.data.order) {
                    item.number = action.data.rfid;
                } 
                return item;
            })
        default: 
            return state;
      }
  }
  
export default listReducer;
