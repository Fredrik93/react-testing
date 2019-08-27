import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props = {}) => {

    const component = shallow(<Header {...props} />);
    return component;
};

const findByTestAttribute = (component, attr) => {
const wrapper = component.find(`[data-test='${attr}']`);
return wrapper; 
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttribute(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});
