import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttribute,testStore} from './../Utils';
import React from 'react';


const setUp = (initialState={}) => {
const store = testStore(initialState);
const wrapper = shallow(<App store={store}/> ).childAt(0).dive();
return wrapper;

};

describe('App Component ', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                bode: 'Some text'
            },{
                title: 'Example title 2',
                bode: 'Some text'
            },{
                title: 'Example title 3',
                bode: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });


    it('Should render without errors ', () => {

        const component = findByTestAttribute(wrapper, 'appComponent');
        expect(component.length).toBe(1);

    })


});