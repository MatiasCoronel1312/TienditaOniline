import { createStore, combineReducers } from 'redux'

import { categoryReducers, productsReducers } from './reducers'

const rootReducer = combineReducers ({
    products: productsReducers,
    category: categoryReducers,
});

export default createStore(rootReducer);