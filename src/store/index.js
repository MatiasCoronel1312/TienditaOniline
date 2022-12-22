import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoryReducers, productsReducers, cartReducer, orderReducer, authReducer } from './reducers'

const rootReducer = combineReducers ({
    products: productsReducers,
    category: categoryReducers,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));