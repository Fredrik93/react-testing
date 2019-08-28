import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from './../Utils';
import React from 'react';


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;

};

describe('App Component ', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                bode: 'Some text'
            }, {
                title: 'Example title 2',
                bode: 'Some text'
            }, {
                title: 'Example title 3',
                bode: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });


    it('Should render without errors ', () => {

        const component = findByTestAttribute(wrapper, 'appComponent');
        expect(component.length).toBe(1);

    });

    it('exampleMethod_updatesState Should update state as expected', () => {

        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });


    it('exampleMethod_returnsAValue Should return value as expected ', () => {

        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);

    });





});