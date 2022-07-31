import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  dataReducers,
  addNewDataReducers,
  editDataReducers,
  deleteDataReducers,
} from "./reducers/dataReducers";
import { userReducers } from "./reducers/userReducers";

const reducer = combineReducers({
  data: dataReducers,
  addData: addNewDataReducers,
  editData: editDataReducers,
  deleteData: deleteDataReducers,
  userInfo: userReducers,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
