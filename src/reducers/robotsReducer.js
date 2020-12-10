import {UPDATE_ROBOTS} from '../actions/robots'

const list=[];

const robotsReducer = (state = list, action) => {
    switch(action.type) {
        case UPDATE_ROBOTS: 
            return state = action.state;
        default: 
            return state;
      }
  }
  
export default robotsReducer;