import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import listReducer from './listReducer';
import socketReducer from './socketReducer';
import rfidReducer from './rfidReducer';
import robotsReducer from './robotsReducer';
import checkedItemsReducer from './checkedItemsReducer';
import startpointReducer from './startPointReducer';


export default combineReducers({
  itemReducer,
  listReducer,
  socketReducer,
  rfidReducer,
  robotsReducer,
  checkedItemsReducer,
  startpointReducer
});