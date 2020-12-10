import {UPDATE_RFID } from '../actions/item'

const item={'rfid':'','order':''};

const itemReducer = (state = item, action) => {
    switch(action.type) {
        case UPDATE_RFID: 
            let obj = JSON.parse(action.state)
            return state = obj;
        default: 
            return state;
      }
  }
  
export default itemReducer;