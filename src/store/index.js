import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoryReducers, productsReducers, cartReducer } from './reducers'

const rootReducer = combineReducers ({
    products: productsReducers,
    category: categoryReducers,
    cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));