import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
let composeEnhancers = compose;
if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const reducers = combineReducers({
	form: formReducer
});

const stores = createStore(reducers, composeEnhancers(), applyMiddleware(thunk));

export default stores;
