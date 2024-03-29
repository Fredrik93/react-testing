import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './../src/reducers/index';
import { middleWares } from './../src/createStore'


export const findByTestAttribute = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};


export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}
