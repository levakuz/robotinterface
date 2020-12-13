import {ROBOT_ON_START_POINT} from '../actions/robot_start_point'

const start_point='';
const startpointReducer = (state = start_point, action) => {
    switch(action.type) {
        case ROBOT_ON_START_POINT:    
            return state = action.state;
            
        default: 
            return state;
      }
  }
  
export default startpointReducer;