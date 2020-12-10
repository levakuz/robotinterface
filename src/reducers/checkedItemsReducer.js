import { ADD_TO_ITEMS, REMOVE_FROM_ITEMS } from '../actions/checkedItems'

const checkedItemsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_ITEMS: 
            return state = state.concat([action.data]);
            
        case REMOVE_FROM_ITEMS: 
            return state = state.filter(item => item.id !== action.id);
        default: 
            return state;
      }
  }
  
export default checkedItemsReducer;