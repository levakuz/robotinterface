import {ROBOT_ON_START_POINT} from '../actions/robot_start_point'

let start_point='';
const startpointReducer = (state = start_point, action) => {
    switch(action.type) {
        case ROBOT_ON_START_POINT: 
            return state = action.data;
        default: 
            return state;
      }
  }
  
export default startpointReducer;