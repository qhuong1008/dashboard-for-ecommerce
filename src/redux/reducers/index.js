import { combineReducers } from "redux";
import { OrderReducer } from "./OrderReducer";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
  user: UserReducer,
  product: ProductReducer,
  order: OrderReducer,
});

export default reducers;
